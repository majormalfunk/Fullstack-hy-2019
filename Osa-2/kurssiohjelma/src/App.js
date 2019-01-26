import React from 'react'
import Course from './components/Course'

const App = () => {

  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 2,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Courses = (props) => {
    const rows = () => props.courses.map(course =>
      <Course key={course.id} course={course} />
    )
    return (
      <div>
        {rows()}
      </div>
    )
  }

  return (
    <div>
      <h1>Opetusohjelma</h1>
      <Courses courses={courses} />
    </div >
  )

}

export default App