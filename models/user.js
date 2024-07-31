import mongoose from "mongoose";
import * as localMongoose from "passport-local-mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: { type: String, unique: true, required: false }, //for google login
  avatarUrl: { type: String, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});
const passportLocalMongoose = localMongoose.default;

UserSchema.plugin(passportLocalMongoose); //passportLocalMongoose adds passward and username filed to schema also makes user username are unique and helps with otheer stuffs read docs for more info

const User = mongoose.model("User", UserSchema);

export default User;
