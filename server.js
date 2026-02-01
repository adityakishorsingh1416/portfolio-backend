const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));


app.use("/api/contact", require("./routes/contact"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
