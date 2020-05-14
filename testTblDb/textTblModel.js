const db = require('../data/config')

module.exports = {
     find,
 findById,
      add,
   remove,
}

function find() {
    return db('testTable')
}
function findById(id){
    return db('testTable')
        .where('id', id)
        .first()
}
async function add(data){
  const [id] = await db('testTable')
         .insert(data, 'id')
    return db('testTable')
         .where({ id })
         .first() 
}
function remove(id) {
    return db('testTable')
        .where({ id })
        .delete()
}