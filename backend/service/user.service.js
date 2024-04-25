
const {users, books} = require('../models')


exports.getAllUsers = async (req) => {
    try {
        const userId = req.id
        const { role } = req.query
        console.log(userId, role)

        if (role) {
                const user = await users.findAll({where: { role: role}, attributes: {exclude: ['password']}}  )
                if(user){
                    return user
                }
                else{
                    return 404
                }
        }
        else {
            const user = await users.findAll({where: { role: "user"}, attributes: {exclude: ['password']}}  )
            if(user){
                return user
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

exports.getUser = async (req) => {
    try {
        const { userId }= req.params
        const role = req.role
        console.log(userId)
        
        if (userId) {
                const user = await users.findOne({where: { id: userId}, attributes: {exclude: ['password']}}  )
                if(user){
                    return user
                }
                else{
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


