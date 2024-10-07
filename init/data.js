const { models } = require("mongoose");

const sampleData = [
    {
        name: "book",
        quantity: 2
    },
    {
        name: "pen",
        quantity: 7
    },
    {
        name: "Laptop",
        quantity: 24
    },
    {
        name: "Mobile",
        quantity: 6
    },{
        name: "Tablet",
        quantity: 27
    },
];

module.exports = {data: sampleData}