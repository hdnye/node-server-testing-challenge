
exports.seed = async function(knex) {
   await knex('testTable').insert([
        { item: 'boa', enhancement: '15', durability: '69' },
        { item: 'wasp', enhancement: '16', durability: '75'},
        { item: 'alligator', enhancement: '20', durability: '100'},
      ]);
    };
