const { where } = require('sequelize')
const {users, books} = require('../models')
const { attribute } = require('@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/attribute.js')

exports.getAllUsers = async (req) => {
    try {
        const userId = req.id
        const { role } = req.query
        
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
            
                return 404
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


