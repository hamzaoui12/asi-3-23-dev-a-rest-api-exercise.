const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AdminSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    unique: true,
    required: "Enter a last name",
  },
  email: {
    type: String,
  },
  Role: {
    type: String,
  },
  Password: {
    type: Number,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("admin", AdminSchema)
