const connectToMongo = require("./config/db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());


app.use("/auth", require("./routes/authRoutes"));
app.use("/notes", require("./routes/noteRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
