import React from 'react'

export const Home = ({ data }) => {
  console.log(Object.keys(data))
  return (
    <div>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  )
}
