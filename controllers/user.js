import User from "../models/user.js";

export const userExist = async (req, res) => {
  const { username } = req.params;
  if (!username) return res.status(400).json({ error: "username is required" });

  try {
    const user = await User.findOne({ username });
    if (user) return res.status(200).json({ success: true, exist: true });
    return res.status(200).json({ success: true, exist: false });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};

export const addProductToCart = async (req, res) => {
  const { _id } = req.user;
  const { productId, amount } = req.body;

  try {
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User not found");
    }

    // Check if the product is already in the cart
    const existingCartItem = user.cart.find((item) =>
      item.productId.equals(productId)
    );

    if (existingCartItem) {
      return res.status(400).json({
        success: false,
        message: "Product already in cart",
      });
    }

    const userUpdated = await User.findByIdAndUpdate(
      _id,
      {
        $push: {
          cart: {
            productId,
            amount: amount > 0 ? amount : 1,
          },
        },
      },
      { new: true } // This option returns the updated document
    );
    return res.status(200).json({
      success: true,
      message: "Product added to cart",
      data: userUpdated,
    });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};

export const removeProductFromCart = async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;

  try {
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User not found");
    }

    const existingCartItem = user.cart.find((item) =>
      item.productId.equals(productId)
    );

    if (!existingCartItem) {
      return res.status(400).json({
        success: false,
        message: "Product does not exist in cart",
      });
    }

    const userUpdated = await User.findByIdAndUpdate(
      _id,
      {
        $pull: {
          cart: {
            productId,
          },
        },
      },
      { new: true } // This option returns the updated document
    );
    return res.status(200).json({
      success: true,
      message: "Product removed from cart",
      data: userUpdated,
    });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};

export const updateProductAmount = async (req, res) => {
  const { _id } = req.user;
  const { productId, amount } = req.body;

  try {
    if (amount <= 0) return removeProductFromCart(req, res); // Remove product if amount is less than or equal to 0

    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User not found");
    }

    const existingCartItem = user.cart.find((item) =>
      item.productId.equals(productId)
    );

    if (!existingCartItem) {
      return res.status(400).json({
        success: false,
        message: "Product does not exist in cart",
      });
    }

    const userUpdated = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          "cart.$[element].amount": amount > 0 ? amount : 1,
        },
      },
      {
        arrayFilters: [{ "element.productId": productId }],
        new: true, // This option returns the updated document
      }
    );
    return res.status(200).json({
      success: true,
      message: "Product amount updated",
      data: userUpdated,
    });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};

export const getCart = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).populate({ path: "cart.productId" });
    return res.status(200).json({ success: true, data: user.cart });
  } catch (e) {
    return res.status(400).json({ success: false, error: e.message });
  }
};
