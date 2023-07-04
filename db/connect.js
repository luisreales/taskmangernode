const mongoose = require("mongoose");
// const connectDB = (url) => {
//   return mongoose
//     .connect(url, {
//       useNewUrlParser: true,
//       useCreateIndexes: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connected to MongoDB Store"))
//     .catch((err) => console.log("Error connecting to MongoDB Store"));
// };
const connectDB = async (url) => {
    try {
      const conn = await mongoose.connect(url, {
        useNewUrlParser: true,
      useCreateIndexes: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      });
      console.log(`MongoDB Connected: Store`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports = connectDB;