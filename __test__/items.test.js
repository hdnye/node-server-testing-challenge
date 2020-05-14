const request = require('supertest')
const server = require('../server')
const db = require('../data/config');


//refreshed seed before testing again
beforeEach(async () => {
    await db.seed.run
})
//destroys changes made by testing
afterAll(async () => {
    await db.destroy()
})

describe('testTable db', () => {
    it('GETS testTbl', async () => {
        const res = await request(server).get('/testTable')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveLength(3)
        expect(res.body[0].item).toBe('boa')
    })
    describe('it adds items to the db', () => {
        it('/', async () => {

        })
        it('/', async () => {

        })
    })
    describe('it removes items from the db', () => {
        it('/', async () => {

        })
        it('/', async () => {

       })
    })
})