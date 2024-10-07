const express = require("express");
const router = express.Router();
const itemController = require("../controllers/items.js")

router
  .route("/items")
  .get(itemController.index)
  .post(itemController.createNewItem);

router
   .put("/items/:id", itemController.updateItem);


module.exports = router;