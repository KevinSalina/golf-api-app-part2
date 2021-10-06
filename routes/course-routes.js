const express = require('express')
const { getAllCourses, getCourseById, createCourse, deleteCourse } = require('../controllers/courses')
const router = express.Router()

// Get All Courses
router.get('/', async (req, res) => {
  const allCourses = await getAllCourses()

  return allCourses ? res.send(allCourses) : res.status(404).send('Courses not found')
})

// Get Course by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const course = await getCourseById(id)

  return course ? res.send(course) : res.status(404).send('Course not found')

})

// Create a New Course
router.post('/', async (req, res) => {
  const courseData = req.body
  const newCourse = await createCourse(courseData)

  return res.status(newCourse.status).send(newCourse.message)
})

// Delete a Course by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deletedCourse = await deleteCourse(id)

  console.log(deletedCourse)

  return res.send('Course Deleted')
})


module.exports = router