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
    */return queryInterface.bulkInsert(
      'Books',
[ { cover: "/images/books/republic.jpg", title: "The Republic", author: "Plato",published: 380, avg_rating: 3.95, createdAt: new Date(),
        updatedAt: new Date() },
{ cover:"Cover", title: "Meditations", author: "Marcus Aurelius",published: 180, avg_rating: 4.22, createdAt: new Date(),
        updatedAt: new Date() },
{ cover:"Cover", title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", published: 1883,avg_rating: 4.05, createdAt: new Date(),
        updatedAt: new Date() },
{ cover:"Cover", title: "Beyond Good and Evil", author: "Friedrich Nietzsche", published: 1886, avg_rating: 4.00, createdAt: new Date(),
        updatedAt: new Date() },
{ cover:"Cover", title: "The Stranger", author: "Albert Camus",published: 1942, avg_rating: 3.99, createdAt: new Date(),
        updatedAt: new Date()  },
{ cover:"Cover", title: "The Art of War", author: "Sun Tzu",published: 500, avg_rating: 3.97, createdAt: new Date(),
        updatedAt: new Date()  },
{ cover:"Cover", title: "Siddhartha", author: "Hermann Hesse", published: 1922, avg_rating: 4.04, createdAt: new Date(),
        updatedAt: new Date()  },
{ cover:"Cover", title: "Critique of Pure Reason", author: "Immanuel Kant", published: 1781, avg_rating: 3.96, createdAt: new Date(),
        updatedAt: new Date() },
{ cover:"Cover", title: "Being and Time", author: "Martin Heidegger", published: 1927, avg_rating: 4.03, createdAt: new Date(),
        updatedAt: new Date()  },
{ cover:"Cover", title: "Candide", author: "Voltaire",published: 1759, avg_rating: 3.77, createdAt: new Date(),
        updatedAt: new Date()  },
{ cover:"Cover", title: "Being and Nothingness", author: "Soren Kierkegaard",published: 1943, avg_rating: 3.97, createdAt: new Date(),
        updatedAt: new Date()  }
],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Books', null, {});
  }
};
