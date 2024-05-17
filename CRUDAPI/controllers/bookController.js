// const books = [
//     { id: 1, title: "Harry Porter" },
//     { id: 2, title: "Wings of Fire" }
// ]
const asyncHandler = require("express-async-handler")
const Book = require("../models/bookSchema")


//FETCH ALL BOOKS USING GET REQUEST
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);//STATUS CODE 200 SIGNIFIES FOUND
})

//ADDING BOOKS USING POST REQUEST
const addBooks = asyncHandler(async (req, res) => {
    console.log(req.user)
    const { name, author } = req.body
    if (!name || !author) {
        res.status(400)
        throw new Error("All Fields are mandatory")
    }
    const newBook = await Book.create({
        name,
        author,
    })
    res.status(201).json(newBook)
})

//UPDATE BOOK DETAILS USING PUT REQUEST
const updateBookDetails = asyncHandler(async(req, res) => {
    const book=await Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error("Book Not Found")
    }

   const updatedBook= await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
   )
   res.status(200).json(updatedBook)
})

//FETCH BOOKS BY ID
const getBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book) {
        res.status(404)
        throw new Error("Book Not Found")
    }
    res.status(200).json(book)
})

//DELETE BOOK BY ID USING DELETE REQUEST
const deleteBook = asyncHandler(async (req, res) => {
    const deleteBook = books.findById(req.params.id)
    if (!deleteBook) {
        res.status(404)
        throw new Error("Book Not Found")
    }
    await ConstantSourceNode.deletOne({ _id: req.params.id })
    res.status(200).json(deleteBook)
})

module.exports = { getBooks, addBooks, getBook, updateBookDetails, deleteBook }