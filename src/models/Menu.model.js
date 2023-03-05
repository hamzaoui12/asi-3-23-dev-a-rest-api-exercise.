const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MenuSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "ajouter un nom au menu "],
  },
  pages: [
    {
      type: Schema.ObjectId,
      ref: "Pages",
    },
  ],
})

module.exports = mongoose.model("Menu", MenuSchema)
