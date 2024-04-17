const { issueService } = require("../service")

exports.createIssue = async (req, res) => {
    try{
        const response = await issueService.createIssue(req)
        if(response === 404){
            return res.status(404).json({message: 'No stock left'})
        }else{
            return res.status(201).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.editIssue = async (req, res) => {
    try{
        const response = await issueService.editIssue(req)
            return res.status(201).json(response)

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllIssues = async (req, res) => {
    try{
        const response = await issueService.getIssues(req)
        if(response === 404 ){
            return res.status(404).json({message: 'No borrower found'})
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