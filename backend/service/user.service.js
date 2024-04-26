
const {users, books, issues} = require('../models')


exports.getAllUsers = async (req) => {
    try {
        const userId = req.id
        const { role } = req.query
        console.log(userId, role)

        if (role) {
                const user = await users.findAll({where: { role: role}, attributes: {exclude: ['password']}}  )
                if(user){
                    const borrowed = await issues.count({where: {userId: user.id}})
                    console.log(borrowed)
                    return user
                }
                else{
                    return 404
                }
        }
        else {
            const user = await users.findAll({where: { role: "user"}, attributes: {exclude: ['password']}})
            
            if(user){
                let borrowed
              const newUserWithIssue= user.map(async (i) => {
                        let newValue=i.toJSON();
                    borrowed = await issues.count({where: {userId: i.id}})
                    newValue['borrowed']= borrowed
                    return newValue;
                })
                const data= await Promise.all(newUserWithIssue);
                return data;
                
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


