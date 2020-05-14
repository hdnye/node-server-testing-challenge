const db = require('../data/config')

module.exports = {
   find,
//    add,
// remove,
}

function find() {
    return db('testTable')
}
