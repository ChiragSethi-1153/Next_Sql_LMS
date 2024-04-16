const { bookController } = require('../controller')

const router = require('express').Router()

router.post("/books", bookController.addBook)
router.get("/books", bookController.getAllBooks)
router.get("/books/:bookId", bookController.searchBooks)
router.put("/books", bookController.editBook)
router.delete("/books", bookController.deleteBook)

module.exports = router 