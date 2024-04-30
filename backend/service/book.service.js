const { books, users } = require("../models");
const { Op } = require('@sequelize/core');

exports.addBook = async (req) => {
    try {
        const userId = req.id
        const role = req.role

        if (role === 'admin') {

            const { title, author, genre, stock, description } = req.body

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
                admin: userId,
                genre,
                description,
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
        const userId = req.id
        const role = req.role


        if (role === 'admin') {
            const { bookId } = req.query
            const { title, author, stock, genre, description } = req.body
            const obj = {}
            if(title){
                obj.title = title;
            }
            if(author){
                obj.author = author;
            }
            if(stock){
                obj.stock = stock;
            }
            if(genre){
                obj.genre = genre
            }
            if(description) {
                obj.description = description
            }

            console.log("obj", obj);

                // let newImage = [];
                // if (req.files !== null && req.files.images && req.files.images.length > 0) {
                //     newImage = req.files.images.map((i) => {
                //         return i.path;
                //     });
                //     console.log(newImage, "ghvugyiv");
                // }
                
                const book = await books.update({
                    ...obj
                },
                {
                    where: {
                        id: bookId,
                        admin: userId
                    },
                    returning: true,
                    plain: true,

                }
            )

            if(book){
                console.log(book)   
                return book
            }
            else{
                return 401
            }
        
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
        const userId = req.id
        const role = req.role

        if (role === 'admin') {
            const { bookId } = req.params
            // console.log(bookId)
            const book = await books.destroy({ where: { id: bookId, admin: userId } })
            if(book){
                console.log(book)
                return book
            }
            else{
                return 401
            }
        }
        else {
            return 401
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
            const allbooks = await books.findAll({ where: {}, include: [{ model: users, where: {}, attributes: {exclude: ['password'] }}], limit: 10 })
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