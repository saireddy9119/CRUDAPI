const express = require('express')
const connectDb=require("./config/dbConnection")
const app = express();
const dotenv=require("dotenv").config()
connectDb()
const PORT = 5443;

//SAMPLE COLLECTION OF BOOKS
const books = [
    { id: 1, title: "Harry Porter" },
    { id: 2, title: "Wings of Fire" }
]

//MIDDLEWARE TO PARSE JSON REQUESTS
app.use(express.json());
app.use("/books", require("./routes/bookRoutes"))


//STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
module.exports = books;