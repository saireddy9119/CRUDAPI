const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the Book Name"],
    },
    author: {
        type: String,
        required: [true, "Please add Author of Book"],
    }
},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Book", bookSchema);