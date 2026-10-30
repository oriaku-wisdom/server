const uuid = require('uuid').v4;


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('student_records', [
      {
        id:uuid(),
        firstName: 'John',
        lastName: 'Doe',
        email: 'john doe@example.com',
        department:'theartre art',
        level:400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:uuid(),
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        department:'engineering',
        level:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    {
      id:uuid(),
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      department:'business',
      level:200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
 id:uuid(),
      firstName: 'sanusi',
      lastName: 'david',
      email: 'sanusi.david@example.com',
      department:'civil engeneering',
      level:100,
      createdAt: new Date(),
      updatedAt: new Date()   

},

{
 id:uuid(),
      firstName: 'wisdom',
      lastName: 'oriaku',
      email: 'wisdom.oriaku@example.com',
      department:'agiculture',
      level:500,
      createdAt: new Date(),
      updatedAt: new Date()
}
    
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('student_records', null, {});
  },
};