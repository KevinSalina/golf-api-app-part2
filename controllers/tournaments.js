const db = require('../models')
const { Op } = require('sequelize')


const getAllTournaments = async () => {
  return await db.Tournaments.findAll({
    include: [
      {
        model: db.Golfers,
        as: 'winner',
        attributes: ['name']
      },
      db.Courses
    ]
  })
}

const getTournamentById = async (id) => {
  return await db.Tournaments.findOne({
    where: {
      [Op.or]: [
        { id: id },
        { name: { [Op.substring]: `${id}` } }
      ]
    },
    include: [
      {
        model: db.Golfers,
        as: 'winner',
        attributes: ['name']
      },
      db.Courses
    ]
  })
}

const createTournament = async (tournamentData) => {

  const { name, courseId, winnerId, purse, date } = tournamentData

  if (!name || !courseId || !winnerId || !purse || !date) {
    return {
      status: 400,
      message: 'Tournament information impartial! Cannot Create new tournament'
    }
  }

  const newTournament = await db.Tournaments.create(tournamentData)

  return {
    status: 200,
    message: newTournament
  }
}

const deleteTournament = async (id) => {
  return await db.Tournaments.destroy({
    where: {
      id: id
    }
  })
}

module.exports = { getAllTournaments, getTournamentById, createTournament, deleteTournament }