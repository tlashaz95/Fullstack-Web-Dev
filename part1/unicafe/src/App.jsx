import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  return (
    <div>
      <h2>
        Give Feedback
      </h2>

      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>

      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
