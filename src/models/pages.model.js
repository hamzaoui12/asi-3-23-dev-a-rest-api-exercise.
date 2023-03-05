const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PageSchema = new Schema({
  title: {
    type: String,
    unique: true,
    maxlength: [100, "maximum 100 caractères"],
  },
  content: {
    type: String,
    minlength: [200, "minimum 200 caractères"],
  },
  slug: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    unique: true,
  },
  creator: {
    type: Schema.ObjectId,
    ref: "Users",
    required: true,
  },

  modifie: [
    {
      type: Schema.ObjectId,
      ref: "Users",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Pages", PageSchema)
