const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false)
    // eslint-disable-next-line no-console
    mongoose.connect(process.env.MONGO_URI, () => console.log("Mongo connecté"))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    process.exit()
  }
}

module.exports = connectDB
