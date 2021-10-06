const Sequelize = require('sequelize')
const db = require('../configs/database')

const Golfers = db.define('golfers', {
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
  }
}, { paranoid: true })


module.exports = Golfers