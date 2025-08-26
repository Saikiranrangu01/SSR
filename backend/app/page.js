import React from 'react'
import CourseButtons from './components/CourseButtons'
const url = "http://localhost:3000/courses"

const page = () => {
  return (
    <CourseButtons url={url}/>
  )
}

export default page