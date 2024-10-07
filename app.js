const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

const itemRouter  = require("./routes/item.js");
const DB_URL = "mongodb://127.0.0.1:27017/Ricoz-node";

main()
  .then( () => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
  await mongoose.connect(DB_URL);
};

app.use(express.json());
app.use("/", itemRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
