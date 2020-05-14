const express = require('express')
const Item = require('./textTblModel')

const router = express.Router()

router.get('/',async (req, res, next) => {
    try {
        res.json(await Item.find())

    } catch(err){
        next(err)
    }
})



module.exports = router;