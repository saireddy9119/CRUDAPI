const express = require("express")
const router = express.Router()
const {getBooks,addBooks,getBook,updateBookDetails,deleteBook}=require("../controllers/bookController")
router.route("/").get(getBooks).post(addBooks)
router.route("/:id").get(getBook).put(updateBookDetails).delete(deleteBook);
module.exports = router