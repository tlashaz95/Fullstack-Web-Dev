import React from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
    <td>
        {text}
    </td>
    <td>
        {text === "Positive" ? `${value}%` : value}
    </td>
    </>
  )
}

export default StatisticLine