const request = require('supertest')
const server = require('../server.js')

describe('server.js', () => {
    describe('index route', () => {
        it('shld rtn OK status from index rte', async () => {
            const expectedStatusCode = 200;
            //req to get api & inspect res
            const res = await request(server).get('/')
            expect(res.status).toEqual(expectedStatusCode)
        })
        it('should rtn JSON{} from the rte', async () => {
            const expectedBody = { message : 'Welcome to my API'}
            const res = await request(server).get('/')
            expect(res.body).toEqual(expectedBody);
        })
        it('should return content-type', async() => {
            const res = await request(server).get('/')
            expect(res.type).toEqual('application/json')
        })
    })
})