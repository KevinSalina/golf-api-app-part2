const express = require('express')
const router = express.Router()
const { getAllGolfers, getGolferById, createGolfer, deleteGolfer } = require('../controllers/golfers')

// Get All Golfers
router.get('/', async (req, res) => {
  const allGolfers = await getAllGolfers()

  return allGolfers ? res.send(allGolfers) : res.status(404).send('Golfers not found')
})

// Get Golfer by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const golfer = await getGolferById(id)

  return golfer ? res.send(golfer) : res.status(404).send('Golfer not found')

})

// Create a New Golfer
router.post('/', async (req, res) => {
  const golferData = req.body
  const newGolfer = await createGolfer(golferData)

  return res.status(newGolfer.status).send(newGolfer.message)
})

// Delete a Golfer by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deletedGolfer = await deleteGolfer(id)

  console.log(deletedGolfer)

  return res.send('Golfer Deleted')
})

module.exports = router