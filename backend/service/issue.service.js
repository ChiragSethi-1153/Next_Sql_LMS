const {users, books, issues} = require('../models')

exports.createIssue = async (req) => {
    try {
        const userId = req.id
        const role = req.role
        console.log(userId)
        const { bookId, returnByDate } = req.body
        const lastDate = new Date(returnByDate)

        if (bookId) {

            const book = await books.findOne({where: { id: bookId }})
            console.log(book)
            let left = (book.stock)
            console.log(left)
            
            
            if (left > 0) {
                const updateStock = await books.update({ stock: left-1 }, { where: {id: bookId} })
                console.log(updateStock)

                const borrower = await issues.create({
                    bookId,
                    userId,
                    borrowDate: Date.now(),
                    lastDate
                })

                console.log(borrower)
                return borrower
            }
            else {
                return 404
            }
        }
        else {
            return 404
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.editIssue = async (req) => {
    try {
        const userId = req.id
        const { issueId, bookId, status, returnDate } = req.body

        const book = await books.findOne({where: { id: bookId }})
        console.log(book)
        let left = (book.stock)
        console.log(left)
        const issued = await issues.findOne({where: { id: issueId }})
        console.log(issued.status)
        if(issued.status === 'borrowed' ){
            if (status === 'returned') {
                const updateStock = await books.update({ stock: left+1 }, { where: {id: bookId} })
                console.log(updateStock)
                
                const borrower = await issues.update({ status, returnDate }, { where: {id: issueId} })
                console.log(borrower)
                
                return borrower
            }   
        }

    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getIssues = async(req) => {
    try {
        
        const userId = req.id
        const { status } = req.query
        if (status) {
                const borrowers = await issues.findAll({where: { status: status }})
                if(borrowers){
                    return borrowers
                }
                else{
                    return 404
                }
        }
        else { 
            const borrowers = await  issues.findAll()
            if(borrowers){
                return borrowers
            }
            else{
                return 404
            }
        }


    } catch (err) {
        console.log(err)
        return err
    }
}