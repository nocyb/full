import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      { name: 'Fundamentals of React', exercices: 10},
      { name: 'Using props to pass data', exercices: 7},
      { name : 'State of a component', exercices: 14},
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercices}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercices}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercices}
      </p>
      <p>Total number of exercices {course.parts[0].exercices + course.parts[1].exercices + course.parts[2].exercices}</p>
    </div>
  )
}

export default App
