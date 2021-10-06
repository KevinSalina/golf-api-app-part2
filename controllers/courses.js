const db = require('../models')
const { Op } = require('sequelize')


const getAllCourses = async () => {
  return await db.Courses.findAll()
}

const getCourseById = async (id) => {
  return await db.Courses.findOne({
    where: {
      [Op.or]: [
        { id: id },
        { name: { [Op.substring]: `${id}` } }
      ]
    }
  })
}

const createCourse = async (courseData) => {

  const { name, par, location, rating, slope, yards } = courseData

  if (!name || !par || !location || !rating || !slope || !yards) {
    return {
      status: 400,
      message: 'Course information impartial! Cannot Create new Course'
    }
  }

  const newCourse = await db.Courses.create(courseData)

  return {
    status: 200,
    message: newCourse
  }
}

const deleteCourse = async (id) => {
  return await db.Courses.destroy({
    where: {
      id: id
    }
  })
}

module.exports = { getAllCourses, getCourseById, createCourse, deleteCourse }