import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, bad, neutral}) => {
    const total = good+bad+neutral;
  return (
    <div>
        <h2>Statistics</h2>
        {
            good+bad+neutral === 0 ? "No feedback given" :
            <>
            <table>
                <tbody>
                    <tr>
                        <StatisticLine text="Good" value={good}/>
                    </tr>
                    <tr>
                        <StatisticLine text="Neutral" value={neutral}/>
                    </tr>
                    <tr>
                        <StatisticLine text="Bad" value={bad}/>
                    </tr>
                    <tr>
                        <StatisticLine text="All" value={total}/>
                    </tr>
                    <tr>
                        <StatisticLine text="Average" value={(good-bad)/total}/>
                    </tr>
                    <tr>
                        <StatisticLine text="Positive" value={(good/total)*100}/>
                    </tr>
                </tbody>
            </table>
            </>
        }
        
    </div>
  )
}

export default Statistics