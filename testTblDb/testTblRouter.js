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

router.post('/', async (req, res, next) => {
    try {
        const data = await Item.add(req.body)
        res.status(201).json(data)
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await db('testTable').where('id', req.params.id).del()
    } catch(err) {
        next(err)
    }
})

module.exports = router;