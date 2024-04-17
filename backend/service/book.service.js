const { books, users } = require("../models");
const { Op } = require('@sequelize/core');

exports.addBook = async (req) => {
    try {
        const userId = req.id
        const role = req.role

        if (role === 'admin') {

            const { title, author, genre, stock } = req.body

            let newImage = [];
            if (req.files !== null && req.files.images && req.files.images.length > 0) {
                newImage = req.files.images.map((i) => {
                    return i.path;
                });
                console.log(newImage, "ghvugyiv");
            }

            const book = await books.create({
                title,
                author,
                genre,
                stock: parseInt(stock),
                coverImage: newImage
            })
            console.log(book)
            return book
        }
        else {
            return 401
        }

    } catch (err) {
        console.log(err)
        return err
    }
}


exports.editBook = async (req) => {
    try {
        // const userId = req.id
        const role = req.role


        if (role === 'admin') {
            const { bookId } = req.query
            const { title, author, stock, genre } = req.body

            let newImage = [];
            if (req.files !== null && req.files.images && req.files.images.length > 0) {
                newImage = req.files.images.map((i) => {
                    return i.path;
                });
                console.log(newImage, "ghvugyiv");
            }

            const book = await books.update({
                title,
                author,
                genre,
                stock: parseInt(stock),
                // coverImage: newImage,
            },
                {
                    where: {
                        id: bookId
                    }
                }
            )

            console.log(book)

            return book
        }
        else {
            return 401
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.deleteBook = async (req) => {
    try {
        const role = req.role

        if (role === 'admin') {
            const { bookId } = req.params
            // console.log(bookId)
            const book = await books.destroy({ where: { id: bookId } })

            console.log(book)

            return book
        }
        else {
            const response = 401
            return response
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getAllBooks = async (req) => {
    try {

        const { body } = req.query
        if (body) {
            const allbooks = await books.findAll({
                where: {
                    [Op.or]: {
                        title: {
                            [Op.iLike]: `%${body}%`,
                        },
                        author: {
                            [Op.iLike]: `%${body}%`,
                        },
                        genre: {
                            [Op.iLike]: `%${body}%`,
                        }
                    },       
                },
                limit: 10
            })
            return allbooks
        }
        else {
            const allbooks = await books.findAll({ limit: 10 })
            return allbooks
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getBook = async (req) => {
    try {
        
        const { bookId } = req.params

        const book = await books.findOne({
            where: {
                id: bookId
            }
        })

        if (book) {
            return book
        }
        else {
            return 404
        }

    } catch (err) {
        console.log(err)
        return err
    }
}