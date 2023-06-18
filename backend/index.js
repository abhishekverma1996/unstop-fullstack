const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const seats = require("./routes/seats");

// mongoose.connect(
//   "mongodb+srv://root:root@cluster0.wrht6hk.mongodb.net/Seat_Booking?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.l2atxcq.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("error", error);
  });

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/seats", seats);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

module.exports = app;
