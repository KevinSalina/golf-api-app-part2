'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('golfers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      wins: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      scoringAvg: {
        type: Sequelize.INTEGER
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      par: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      slope: {
        type: Sequelize.INTEGER
      },
      yards: {
        type: Sequelize.INTEGER
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    return queryInterface.createTable('tournaments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: { model: 'courses', key: 'id' }
      },
      winnerId: {
        type: Sequelize.INTEGER,
        references: { model: 'golfers', key: 'id' }
      },
      purse: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tournaments')
    await queryInterface.dropTable('courses')
    return queryInterface.dropTable('golfers')
  }
};
