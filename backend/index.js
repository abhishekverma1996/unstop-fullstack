const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const seats = require("./routes/seats");

mongoose.connect(
  "mongodb+srv://abhishekverma495:Abhi9613@cluster0.8nrlwuo.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/seats", seats);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

module.exports = app;

// mukul7661
// jJ5WFXK0KQanBoWn

//p8ClBE5vLqlnUDVp

//0xY8xSvrjatTwDPf
