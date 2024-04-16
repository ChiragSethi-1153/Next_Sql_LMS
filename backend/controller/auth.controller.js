const {authService} = require('../service')

exports.signup = async (req, res) => {

    try{
        const response = await authService.signup(req);
        
        if(response.errors){
            console.log(response.errors)
            return res.status(500).json(response)
        }
        if(response === 409  ){
            return res.status(409).json({message: 'User already exists! Login instead'})
        }
        if(response === 405){
            return res.status(409).json({message: 'Wrong Email address'})
        }
        if(response === 400){
            return res.status(400).json({message: 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character'})
        }
        else{
            return res.status(201).json({message: 'Signed up successfully', response})
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.login = async (req, res) => {

    try{ 
        const response = await authService.login(req)
        if(response === 404){
            return res.status(404).json({message: 'User not found. Signup Please!'})
        }
        if(response === 400){
            return res.status(400).json({message: "Invalid Email / Password"})
        }
        // if(response === 401){
        //     return res.status(401).json({message: "Account has been deleted"})
        // }
        // if(response === 501){
        //     return res.status(501).json({message: "Account has not been added yet"})
        // }
            const {data, token} = response
            return res.status(200).json({message: "Successfully Logged In", user: data, token})
        
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }

}
