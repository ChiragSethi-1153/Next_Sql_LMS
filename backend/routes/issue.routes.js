const {issueController} = require('../controller')
const { verifyToken } = require('../middleware/auth')

const router = require('express').Router()

router.post('/issues', verifyToken, issueController.createIssue)
router.put('/issues', verifyToken, issueController.editIssue)
router.get('/issues', verifyToken, issueController.getAllIssues)


module.exports = router