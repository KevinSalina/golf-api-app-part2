'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('golfers', [
      {
        name: 'Jon Rahm',
        wins: 6,
        rank: 1,
        scoringAvg: 72.281
      },
      {
        name: 'Dustin Johnson',
        wins: 24,
        rank: 2,
        scoringAvg: 69.619
      },
      {
        name: 'Collin Morikawa',
        wins: 5,
        rank: 3,
        scoringAvg: 70.109
      },
      {
        name: 'Patrick Cantlay',
        wins: 6,
        rank: 4,
        scoringAvg: 69.736
      },
      {
        name: 'Xander Schauffele',
        wins: 4,
        rank: 5,
        scoringAvg: 69.859
      }
    ])

    await queryInterface.bulkInsert('courses', [
      {
        name: 'Caves Valley golf Club',
        par: 72,
        location: 'Owings, MD',
        rating: 75.3,
        slope: 142,
        yards: 7290
      },
      {
        name: 'Royal St. George\'s GC',
        par: 70,
        location: 'Sandwhich, UK',
        rating: 75.2,
        slope: 138,
        yards: 7204
      },
      {
        name: 'The Concession Golf Club',
        par: 70,
        location: 'Bradenton, FL',
        rating: 76.7,
        slope: 153,
        yards: 7477
      },
      {
        name: 'Torrey Pines (South)',
        par: 71,
        location: 'La Jolla, CA',
        rating: 78.8,
        slope: 148,
        yards: 7802
      },
      {
        name: 'Augusta National Golf Club',
        par: 72,
        location: 'Augusta, GA',
        rating: 76.2,
        slope: 148,
        yards: 7485
      }
    ])

    return queryInterface.bulkInsert('tournaments', [
      {
        name: 'BMW Championship',
        courseId: 1,
        winnerId: 4,
        purse: 9500000,
        date: '8-29-2021'
      },
      {
        name: 'The Open Championship',
        courseId: 2,
        winnerId: 3,
        purse: 11500000,
        date: '7-18-2021'
      },
      {
        name: 'World Golf Championships-Workday Championship at The Concession',
        courseId: 3,
        winnerId: 3,
        purse: 10500000,
        date: '2-28-2021'
      },
      {
        name: 'The U.S. Open',
        courseId: 4,
        winnerId: 1,
        purse: 4500000,
        date: '6-20-2021'
      },
      {
        name: 'Masters Tournament (2020)',
        courseId: 5,
        winnerId: 2,
        purse: 11500000,
        date: '11-15-2020'
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tournaments')
    await queryInterface.bulkDelete('courses')
    return queryInterface.bulkDelete('golfers')
  }
};
