const Item = require("../models/item.js");

module.exports.index = async(req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports.createNewItem = async (req, res) => {
    const newItem = new Item(req.body);
    try {
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports.updateItem = async (req, res)=> {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedItem);
    } catch (error) {
        res.status(400).send(error);
    }
}