const mongoose =require("mongoose");

const connectDB = async () => {
  // Connecting to the database
  mongoose
    .connect('mongodb+srv://ronyfr3:ronyfr3@cluster0.mav130f.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // tls: true,
      // tlsCAFile: __dirname + "/ca-certificate.crt"
    })
    .then((data) => {
      console.log(`mongodb connection established with server: ${data.connection.host}`);
    })
};

module.exports = connectDB;
