import React from 'react'

export const Home = ({ data }) => {
  console.log(data)
  const swData = Object.entries(data)
  return (
    <div>
      <ul>
        {swData.map((item) => (
          <li key={item[0]}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul>
    </div>
  )
}
