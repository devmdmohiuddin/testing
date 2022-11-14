const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "basic",
      enum: ["basic", "supervisor", "admin"],
    },
    avatar: {
      type: [],
    },
    totalBuyCost: {
      type: Number, //order korar sathe eta update korte hbe
      default: 0,
    },
    welcomeToken: String,
    purchasedProducts: [], // //order korar sathe eta update korte hbe
    usedTokens: [], //order korar sathe eta update korte hbe,before that check its existance
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
