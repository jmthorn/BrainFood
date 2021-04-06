'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */const books = return queryInterface.bulkInsert(
      'Books',
      [ { cover: "Cover", title: "The Republic", author: "Plato", avg_rating: 3.95, published: -380},
{ cover:"Cover", title: "Meditations", author: "Marcus Aurelius", avg_rating: 4.22, published: 180},
{ cover:"Cover", title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", avg_rating: 4.05, published: 1883},
{ cover:"Cover", title: "Beyond Good and Evil", author: "Friedrich Nietzsche", avg_rating: 4.00, published: 1886},
{ cover:"Cover", title: "The Stranger", author: "Albert Camus", avg_rating: 3.99, published: 1942 },
{ cover:"Cover", title: "The Art of War", author: "Sun Tzu", avg_rating: 3.97, published: -500 },
{ cover:"Cover", title: "Siddhartha", author: "Hermann Hesse", avg_rating: 4.04, published: 1922 },
{ cover:"Cover", title: "Critique of Pure Reason", author: "Immanuel Kant", avg_rating: 3.96 ,published:  1781 },
{ cover:"Cover", title: "Being and Time", author: "Martin Heidegger", avg_rating: 4.03, published: 1927 },
{ cover:"Cover", title: "Candide", author: "Voltaire", avg_rating: 3.77, published: 1759 },
{ cover:"Cover", title: "Being and Nothingness", author: "Soren Kierkegaard", avg_rating: 3.97, published: 1943 }
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
