const express = require('express')
const { getAllTournaments, getTournamentById, createTournament, deleteTournament } = require('../controllers/tournaments')
const router = express.Router()

// Get All Tournaments
router.get('/', async (req, res) => {
  const allTournaments = await getAllTournaments()

  return allTournaments ? res.send(allTournaments) : res.status(404).send('Tournaments not found')
})

// Get Tournament by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const tournament = await getTournamentById(id)

  return tournament ? res.send(tournament) : res.status(404).send('Tournament not found')

})

// Create a New Tournament
router.post('/', async (req, res) => {
  const tournamentData = req.body
  const newTournament = await createTournament(tournamentData)

  return res.status(newTournament.status).send(newTournament.message)
})

// Delete a Tournament by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deletedTournament = await deleteTournament(id)

  console.log(deletedTournament)

  return res.send('Tournament Deleted')
})


module.exports = router