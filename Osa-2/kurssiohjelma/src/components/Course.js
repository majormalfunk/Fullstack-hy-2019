import React from 'react'

const Course = (props) => {
  const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    const rows = () => props.course.parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )
    return (
      <div>
        {rows()}
      </div>
    )
  }

  const Total = (props) => {
    var arr = props.course.parts;
    const total = arr.reduce(function (acc, obj)  {
      return acc + obj.exercises; }, 0);

      return (
      <p>Yhteensä {total} tehtävää</p>
    )
  }

  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div >
  )


}

export default Course