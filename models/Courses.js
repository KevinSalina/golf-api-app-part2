const Sequelize = require('sequelize')
const db = require('../configs/database')

const Courses = db.define('courses', {
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
  }
}, { paranoid: true })

module.exports = Courses