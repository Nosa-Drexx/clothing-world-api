const productList = [
  {
    id: "8b144377-69d2-4dc0-805f-1b315832d3ac",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: ["Men"],
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    colors: ["Blue"],
    type: "Bag",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: "402e47f5-eb38-498b-981a-075eef677d00",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: ["Men"],
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    type: "Shirt",
    colors: ["White"],
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: "29ccf1fa-f139-4f52-ab82-608228b1eaf1",
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: ["Men"],
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    colors: ["Brown"],
    type: "Jacket",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: "3d5adc37-b156-4885-b824-f51c2c49b09a",
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Men"],
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    type: "Shirt",
    colors: ["Grey"],
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: "7ee072bf-167f-4c84-aa7a-34576c9f3a81",
    title: "Mens Casual Slim Fit",
    price: 10.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Men"],
    image:
      "https://cdn.pixabay.com/photo/2017/01/13/04/28/blank-1976317_1280.png",
    type: "Shirt",
    colors: ["Green"],
    rating: {
      rate: 3.1,
      count: 430,
    },
  },
  {
    id: "3f92f8ed-2467-46b5-b60f-da1143eb54cb",
    title: "Mens Casual Slim Fit",
    price: 20.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Men"],
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Shirt",
    colors: ["Black"],
    rating: {
      rate: 3.3,
      count: 430,
    },
    discountPrice: 14.99,
  },
  {
    id: "9755dde4-1b8b-4c30-8598-c0a2265dcc97",
    title: "Mens Casual Slim Fit",
    price: 12.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Men"],
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Shirt",
    colors: ["Black"],
    rating: {
      rate: 4.3,
      count: 430,
    },
  },
  {
    id: "c6f12714-4780-40ff-bc3f-21d7378a899f",
    title: "Mens Casual Trouser",
    price: 12.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Men"],
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Trouser",
    colors: ["Black"],
    rating: {
      rate: 2.3,
      count: 430,
    },
    discountPrice: 9.99,
  },
  {
    id: "ee7e7346-53d9-47bb-ab91-30d3c81da9c0",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    colors: ["Purple"],
    type: "Jacket",
    rating: {
      rate: 2.6,
      count: 235,
    },
    discountPrice: 30.99,
  },
  {
    id: "6314219b-43b7-4781-8182-ffa9b7fa7ad1",
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    colors: ["Black"],
    type: "Jacket",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: "96ef4331-0d92-4a63-88ad-8ba6b1c33b25",
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    colors: ["Blue"],
    type: "Jacket",
    rating: {
      rate: 3.8,
      count: 679,
    },
    discountPrice: 29.99,
  },
  {
    id: "95919e4a-4b68-4b94-b4a8-a31413140b13",
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    colors: ["White"],
    type: "Gown",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: "7bc6759b-35d0-483d-b815-f6c61a551e2b",
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    colors: ["Red"],
    type: "Shirt",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: "9f60150f-ed07-4a80-a50e-2f9525e482da",
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: ["Women"],
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    colors: ["Purple"],
    type: "Shirt",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: "2cd50ce2-78b0-4e11-9115-0cb9e7270214",
    title: "Women Trouser",
    price: 12.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: ["Women"],
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Trouser",
    colors: ["Black"],
    rating: {
      rate: 2.3,
      count: 430,
    },
  },
  {
    id: "d0015881-99f2-4cac-aa18-43bb81cc6534",
    title: "Majestic Mountain Graphic T-Shirt",
    price: 44,
    description:
      "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    category: ["Women", "Men"],
    type: "Shirt",
    colors: ["Black", "White"],
    rating: {
      rate: 2.6,
      count: 235,
    },
    discountPrice: 40,
  },
  {
    id: "025eb040-781e-4666-ace9-46108c53ad9c",
    title: "Classic Red Pullover Hoodie",
    price: 10,
    description:
      "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    image: "https://i.imgur.com/1twoaDy.jpeg",
    category: ["Women", "Men"],
    type: "Hoody",
    colors: ["Red"],
    rating: {
      rate: 4.6,
      count: 235,
    },
  },
  {
    id: "77421924-b3af-4960-aa27-76d598dea24d",
    title: "Classic Heather Grey Hoodie",
    price: 69,
    description:
      "Stay cozy and stylish with our Classic Heather Grey Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
    image: "https://i.imgur.com/cHddUCu.jpeg",
    category: ["Women", "Men"],
    type: "Hoody",
    colors: ["Grey"],
    rating: {
      rate: 5,
      count: 235,
    },
  },
  {
    id: "5f45d4dc-fe27-47f8-8567-3e91fcb6e7b8",
    title: "Classic Grey Hooded Sweatshirt",
    price: 90,
    description:
      "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
    image: "https://i.imgur.com/R2PN9Wq.jpeg",
    category: ["Women", "Men"],
    type: "Hoody",
    colors: ["Grey"],
    rating: {
      rate: 2,
      count: 235,
    },
    discountPrice: 50,
  },
  {
    id: "91636963-0f82-4c45-ae96-4986681ef162",
    title: "Black Hooded Sweatshirt",
    price: 77,
    description:
      "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
    image: "https://i.imgur.com/cSytoSD.jpeg",
    category: ["Women", "Men"],
    type: "Hoody",
    colors: ["Black"],
    rating: {
      rate: 3,
      count: 235,
    },
  },
  {
    id: "a28f2ee0-6033-4199-a277-7ae32ed28e5d",
    title: "Classic Comfort Fit Joggers",
    price: 77.0,
    description:
      "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
    image: "https://i.imgur.com/ZKGofuB.jpeg",
    category: ["Women", "Men"],
    type: "Joggers",
    colors: ["Black"],
    rating: {
      rate: 4.1,
      count: 235,
    },
  },
  {
    id: "56247065-d564-421b-8e98-9da08eced9f9",
    title: "Classic Comfort Drawstring Joggers",
    price: 88.0,
    description:
      "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
    image: "https://i.imgur.com/mp3rUty.jpeg",
    category: ["Women", "Men"],
    type: "Joggers",
    colors: ["White"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
  {
    id: "e2bf4a08-acaf-429c-b2f3-de1d4654efc8",
    title: "Classic Red Jogger Sweatpants",
    price: 88.0,
    description:
      "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    image: "https://i.imgur.com/9LFjwpI.jpeg",
    category: ["Women", "Men"],
    type: "Joggers",
    colors: ["Red"],
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: "4ce23a80-a775-4c28-9903-ae1281000a05",
    title: "Classic Navy Blue Baseball Cap",
    price: 61.0,
    description:
      "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    image: "https://i.imgur.com/R3iobJA.jpeg",
    category: ["Women", "Men"],
    type: "Cap",
    colors: ["Blue"],
    rating: {
      rate: 2.6,
      count: 235,
    },
    discountPrice: 50.0,
  },
  {
    id: "7bb2c5a9-59d0-4afb-bb50-73e2c71770e4",
    title: "Classic Blue Baseball Cap",
    price: 86.0,
    description:
      "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
    image: "https://i.imgur.com/wXuQ7bm.jpeg",
    category: ["Women", "Men"],
    type: "Cap",
    colors: ["Blue"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },
  {
    id: "b85383ca-2afd-4e72-a290-fa095adafb1a",
    title: "Classic Red Baseball Cap",
    price: 35.0,
    description:
      "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    image: "https://i.imgur.com/cBuLvBi.jpeg",
    category: ["Women", "Men"],
    type: "Cap",
    colors: ["Red"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
  {
    id: "6e5a9767-7746-4d32-9aa6-e9cdece82402",
    title: "Classic Black Baseball Cap",
    price: 58.0,
    description:
      "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    image: "https://i.imgur.com/KeqG6r4.jpeg",
    category: ["Women", "Men"],
    type: "Cap",
    colors: ["Grey"],
    rating: {
      rate: 3.6,
      count: 235,
    },
    discountPrice: 20.0,
  },
  {
    id: "9f9c5d69-c301-4775-9d6d-60d4ed291574",
    title: "Classic Olive Chino Shorts",
    price: 84.0,
    description:
      "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    image: "https://i.imgur.com/UsFIvYs.jpeg",
    category: ["Men"],
    type: "Short",
    colors: ["Green"],
    rating: {
      rate: 3.6,
      count: 235,
    },
    discountPrice: 60.0,
  },
  {
    id: "13372445-1086-445b-86f9-1d9a8020c6c2",
    title: "Classic High-Waisted Athletic Shorts",
    price: 43.0,
    description:
      "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    image: "https://i.imgur.com/eGOUveI.jpeg",
    category: ["Women"],
    type: "Short",
    colors: ["Grey"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },
  {
    id: "1bb5e167-eea9-4761-828f-3e3ab1784242",
    title: "Classic White Crew Neck T-Shirt",
    price: 39.0,
    description:
      "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    image: "https://i.imgur.com/axsyGpD.jpeg",
    category: ["Women", "Men"],
    type: "Shirt",
    colors: ["White"],
    rating: {
      rate: 3.6,
      count: 235,
    },
    discountPrice: 20.0,
  },
  {
    id: "a215e28f-6a26-4674-a392-420365241618",
    title: "Classic White Tee - Timeless Style and Comfort",
    price: 73.0,
    description:
      "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    image: "https://i.imgur.com/Y54Bt8J.jpeg",
    category: ["Women", "Men"],
    type: "Shirt",
    colors: ["White"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
  {
    id: "108b750a-02ab-48bf-8167-674c8fd7b0b8",
    title: "Classic Black T-Shirt",
    price: 35.0,
    description:
      "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    image: "https://i.imgur.com/9DqEOV5.jpeg",
    category: ["Women", "Men"],
    type: "Shirt",
    colors: ["Silver"],
    rating: {
      rate: 2.6,
      count: 235,
    },
  },

  {
    id: "da652115-5c0f-419d-9299-a5104c8e4eb5",
    title: "Futuristic Holographic Soccer Cleats",
    price: 39.0,
    description:
      "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    image: "https://i.imgur.com/qNOjJje.jpeg",
    category: ["Women", "Men"],
    type: "Shoe",
    colors: ["Silver"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },
  {
    id: "fa68b827-8e40-4b53-8ed0-1456927ec30b",
    title: "Rainbow Glitter High Heels",
    price: 39,
    description:
      "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    image: "https://i.imgur.com/62gGzeF.jpeg",
    category: ["Women"],
    type: "Shoe",
    colors: ["Blue", "Silver", "Blue", "Pink", "Red", "Orange", "Purple"],
    rating: {
      rate: 4.6,
      count: 235,
    },
    discountPrice: 30,
  },
  {
    id: "08f58066-7fab-4f3a-a7d6-ebf7a977228e",
    title: "Chic Summer Denim Espadrille Sandals",
    price: 33.0,
    description:
      "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    image: "https://i.imgur.com/9qrmE1b.jpeg",
    category: ["Women"],
    type: "Shoe",
    colors: ["Blue", "Brown"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
  {
    id: "c662091c-59fc-4029-9655-d63332c4024b",
    title: "Vibrant Runners: Bold Orange & Blue Sneakers",
    price: 27,
    description:
      "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
    image: "https://i.imgur.com/hKcMNJs.jpeg",
    category: ["Men"],
    type: "Shoe",
    colors: ["White", "Orange", "Blue"],
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: "4c16d41b-7e32-4a46-a441-84c4d450175c",
    title: "Vibrant Pink Classic Sneakers",
    price: 84.0,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    image: "https://i.imgur.com/mcW42Gi.jpeg",
    category: ["Women"],
    type: "Shoe",
    colors: ["Pink"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },
  {
    id: "858ae482-6a83-4bbb-8986-0f66e23b2190",
    title: "Futuristic Silver and Gold High-Top Sneaker",
    price: 68.0,
    description:
      "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    image: "https://i.imgur.com/npLfCGq.jpeg",
    category: ["Men", "Women"],
    type: "Shoe",
    colors: ["Silver", "Gold"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
  {
    id: "56850c40-752f-44a5-9c12-328125dd0d28",
    title: "Futuristic Chic High-Heel Boots",
    price: 36.0,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    image: "https://i.imgur.com/HqYqLnW.jpeg",
    category: ["Women"],
    type: "Shoe",
    colors: ["Silver"],
    rating: {
      rate: 4.6,
      count: 235,
    },
  },
  {
    id: "98a6411e-21fd-4aa8-a830-3e416f2b8f14",
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53.0,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    image: "https://i.imgur.com/AzAY4Ed.jpeg",
    category: ["Women"],
    type: "Shoe",
    colors: ["White", "Gold"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },
  {
    id: "75953a19-80a1-4f7c-b22a-954954169260",
    title: "Elegant Purple Leather Loafers",
    price: 17.0,
    description:
      "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
    image: "https://i.imgur.com/Au8J9sX.jpeg",
    category: ["Men"],
    type: "Shoe",
    colors: ["Purple"],
    rating: {
      rate: 2.6,
      count: 235,
    },
    discountPrice: 10,
  },
  {
    id: "75a3a148-4b5b-4533-af07-6b5a270f343f",
    title: "Classic Blue Suede Casual Shoes",
    price: 39.0,
    description:
      "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    image: "https://i.imgur.com/sC0ztOB.jpeg",
    category: ["Men"],
    type: "Shoe",
    colors: ["Blue"],
    rating: {
      rate: 1.6,
      count: 235,
    },
  },

  {
    id: "9aacd5b4-fa5f-4a35-b3ea-c28152d967ac",
    title: "Sleek Olive Green Hardshell Carry-On Luggage",
    price: 48,
    description:
      "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
    image: "https://i.imgur.com/jVfoZnP.jpg",
    category: ["Men", "Women"],
    type: "Bag",
    colors: ["Green"],
    rating: {
      rate: 4.6,
      count: 235,
    },
    discountPrice: 38,
  },
  {
    id: "9fa47fe3-1e92-4d16-bc8d-dc1fa790561d",
    title: "Chic Transparent Fashion Handbag",
    price: 61,
    description:
      "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
    image: "https://i.imgur.com/Lqaqz59.jpg",
    category: ["Women"],
    type: "Bag",
    colors: ["Black", "Gold"],
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: "c07e1d9a-31c4-4214-a9c9-cb59d5d9a22d",
    title: "Product_310524132017_45",
    price: 43,
    description:
      "LTBYXXJFZPXFIYHPLWFBKWGDXWSUKKGLBMXCCASJONQZUDFBWYEIWMLRTZBPUSMJFSGLLRZLIECRQCBEFYTGAOETDXIDPYWOVNLR",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    category: ["Men"],
    type: "Shirt",
    colors: ["Black"],
    rating: {
      rate: 3.6,
      count: 235,
    },
  },
];

export default productList;
