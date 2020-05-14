const request = require('supertest')
const server = require('../server')
const db = require('../data/config');
const Item = require('../testTblDb/textTblModel')

//refreshed seed before testing again
beforeEach(async () => {
   // await db('testTable').truncate()
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
        expect(res.body[0].item).toBe('boa')
    })
    it('adds items to the db', async () => {
        const res = await request(server).get('/testTable')
        await Item.add({ item: 'alligator', enhancement: '20', durability: 100})
        expect(res.statusCode).toBe(200)
        //read data from table
        const data = await db('testTable')
        //verify new record added
        expect(data).toHaveLength(5)
        
    })
    it('it removes items from the db', async() => {
        const res = await request(server).get('/testTable')
        await Item.remove(3)
        expect(res.statusCode).toBe(200)
        const data = await db('testTable')
      //  expect(data).toHaveLength(4)
    })
       
  })
