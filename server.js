const express = require('express')
const app = express()
const db = require('./configs/database')

// Require Routes
const golferRoutes = require('./routes/golfer-routes')
const tournamentRoutes = require('./routes/tournament-routes')
const courseRoutes = require('./routes/course-routes')

// App Config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// DB Test
db.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log('error!'))


// Routes
app.use('/golfers', golferRoutes)
app.use('/tournaments', tournamentRoutes)
app.use('/courses', courseRoutes)

const port = 1337
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})