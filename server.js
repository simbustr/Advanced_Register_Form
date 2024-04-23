const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customerRoute = require("./routes/customer");

const app = express();
app.use(express.json());
app.use(cors());

//routes

app.use("/customer", customerRoute);

//port
const port = 2000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/newcustomer-app")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
