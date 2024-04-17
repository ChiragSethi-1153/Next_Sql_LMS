const { userService } = require("../service")


exports.getAllUsers = async (req, res) => {
    try{
        const response = await userService.getAllUsers(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No user found'})
        }
        else{
            return res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getUser = async (req, res) => {
    try{
        const response = await userService.getUser(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No user found'})
        }
        else{
            return res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}