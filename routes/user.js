const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.send('string about user')
})

router.post('/', (req, res, next) => {
    res.send('message 2 about user')
})

router.get('/add', (req, res, next) => {
    res.send('user add message!')
})


module.exports = router