const Golfers = require('./Golfers')
const Tournaments = require('./Tournaments')
const Courses = require('./Courses')

Golfers.hasOne(Tournaments, {
  foreignKey: 'winnerId',
})

Tournaments.belongsTo(Golfers, {
  foreignKey: 'winnerId',
  as: 'winner'
})
Tournaments.belongsTo(Courses)

Courses.hasOne(Tournaments)

module.exports = { Golfers, Tournaments, Courses }