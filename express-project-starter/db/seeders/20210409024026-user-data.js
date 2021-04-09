'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Users', [
        {username:"Demo", email: "demo@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"HenryL", email: "henry@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"DonnieDarko", email: "donnie@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"ElizabethTaylor", email: "elizabeth@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"AudryHepburn", email: "audrey@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"ToriSpelling", email: "tori@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"AnnaKarenina", email: "anna@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"KenryIV", email: "audrey@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"Ted", email: "ted@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"iloveapplebees", email: "apple@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"CaptainAmerica", email: "america@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"hannibalL", email: "hannibal@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"winonaR", email: "winona@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"Dr.SuessRulz", email: "suess@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"Olivander", email: "olivander@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"nordichistory", email: "nordic@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"cantRead", email: "read@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"cheese", email: "cheese@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"boots", email: "boots@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
        {username:"travisrulz", email: "trav@gmail.com", hashedpassword: "$2b$10$kwFz8XFqWfvCHDljHjEEaOiSgp2ABtubVWtXR/JpO2dpMIoMTCuN.", createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Users', null, {});

  }
};
