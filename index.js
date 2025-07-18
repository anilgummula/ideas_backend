const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const router = require("./routes/post.route.js");

dotenv.config();
const PORT = process.env.PORT || 5000;


connectDB();

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/ideas", router);


app.get("/", (req, res) => {
  res.send("Hello, you are welcome!");
});


app.listen(PORT, () => {
  console.log(`✅ Server is live at port: ${PORT}`);
});
