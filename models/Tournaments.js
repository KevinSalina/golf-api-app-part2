const Sequelize = require('sequelize')
const db = require('../configs/database')
const Golfers = require('./Golfers')
const Courses = require('./Courses')

const Tournaments = db.define('tournaments', {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  courseId: {
    type: Sequelize.INTEGER,
    references: { model: Courses, key: 'id' }
  },
  winnerId: {
    type: Sequelize.INTEGER,
    references: { model: Golfers, key: 'id' }
  },
  purse: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATEONLY
  }
}, { paranoid: true })

module.exports = Tournaments