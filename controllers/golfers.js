const db = require('../models')
const { Op } = require('sequelize')


const getAllGolfers = async () => {
  return await db.Golfers.findAll()
}

const getGolferById = async (id) => {
  return await db.Golfers.findOne({
    where: {
      [Op.or]: [
        { id: id },
        { name: { [Op.substring]: `${id}` } }
      ]
    }
  })
}

const createGolfer = async (golferData) => {

  const { name, rank, wins, scoringAvg } = golferData

  if (!name || !rank || !wins || !scoringAvg) {
    return {
      status: 400,
      message: 'Golfer information impartial! Cannot Create new gofler'
    }
  }

  const newGofler = await db.Golfers.create(golferData)

  return {
    status: 200,
    message: newGofler
  }
}

const deleteGolfer = async (id) => {
  return await db.Golfers.destroy({
    where: {
      id: id
    }
  })
}

module.exports = { getAllGolfers, getGolferById, createGolfer, deleteGolfer }