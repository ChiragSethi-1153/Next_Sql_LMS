const { bookController } = require('../controller')
const { verifyToken } = require('../middleware/auth')
const { upload } = require('../middleware/upload')

const router = require('express').Router()

router.post("/books", verifyToken, upload, bookController.addBook)
router.get("/books", bookController.getAllBooks)
router.get("/books/:bookId", bookController.getBook)
router.put("/books", verifyToken, bookController.editBook)
router.delete("/books/:bookId", verifyToken, bookController.deleteBook)

module.exports = router 