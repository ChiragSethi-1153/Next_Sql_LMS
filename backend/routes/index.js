const router = require("express").Router()

router.use('/', require('./auth.routes'))
router.use('/', require('./book.routes'))
router.use('/', require('./issue.routes'))
router.use('/', require('./user.routes'))



router.use('/', require('./404.routes'))

module.exports = router