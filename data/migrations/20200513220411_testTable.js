
exports.up = async function(knex) {
    await knex.schema.createTable('testTable', (table) => {
        table.increments('id')
        table.string('item').notNullable().unique()
        table.string('enhancement').notNullable()
        table.integer('durability').notNullable()
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('testTable') 
  
};
