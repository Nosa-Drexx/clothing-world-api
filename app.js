import * as dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import { readdirSync } from "fs";
import passport from "passport";
import Strategy from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/user.js";
import Product from "./models/products.js"; // import product model to register it

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

//Mongo DB config
const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : "mongodb://localhost:27017/clothing-world";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", (e) => console.log(`connection error: ${e}`));
db.once("open", () => {
  console.log(`
=======================================
        Database connected
=======================================
    `);
});

//store and session config
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60, //resave after 24 hours (calulated in seconds)
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
});

store.on("error", (e) => {
  console.log("session store error", e);
});

//sesssions configuration
const sessionConfig = {
  store,
  name: "clothing-world-session",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitalized: true,
  cookie: {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production" ? true : false,
    secure: false,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //current date(returns in milliseconds) + 1 week (in milliseconds)
    maxAge: 1000 * 60 * 60 * 24 * 7, //1 week in milliseconds
  },
};

// app (expresss) config
const app = express();
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // or '*' for wildcard, but not recommended in production
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session()); //must use session before using passport session

const LocalStrategy = Strategy;

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//authenticate with google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.NODE_ENV === "production"
          ? `${process.env.BASE_URL}/auth/google/callback`
          : "http://localhost:5000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // Here, find or create the user in your database
      try {
        // Find or create a user based on Google profile
        let user = await User.findOne({
          $or: [{ googleId: profile.id }, { email: profile.emails[0].value }],
        });

        if (!user) {
          const avatarUrl =
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : null;
          //update database with required values
          user = new User({
            username: profile.emails[0].value, // or profile.displayName
            googleId: profile.id,
            avatarUrl: avatarUrl,
            email: profile.emails[0].value,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            // You might want to set other user fields here
          });

          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

//read file and map through all the routes
readdirSync("./routes").map(async (routefileName) => {
  const route = await import(`./routes/${routefileName}`);
  app.use("/", route.router);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  try {
    res.status(200).send("Welcome to Clothing World API");
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});
