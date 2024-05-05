import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
let initialVotes = new Array(anecdotes.length).fill(0)

function App() {
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)

  const handleAnecdotes = () => {
    const randomAnecdote = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(randomAnecdote)
  }

  const handleVotes = () => {
    const newVotes = votes.map((vote, sel) => {
      if(sel == selected)
      {
        return vote += 1;
      }
      else
      {
        return vote;
      }
    })
    setVotes(newVotes);
  }
  
  const handleMostVotes = () => {
    let maxVoteIndex = 0
    let maxVotes = votes[0]

    for(let i = 1 ; i < votes.length ; i++)
    {
      if(votes[i] > maxVotes)
      {
        maxVotes = votes[i]
        maxVoteIndex = i
      }
    }

    return `${anecdotes[maxVoteIndex]} has ${maxVotes} votes`
  }

  return (
    <>
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleAnecdotes}>next anecdote</button>
    </div>
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{votes.every(vote => vote ===0 ) ? "Voting not started" : handleMostVotes()}</p>
    </div>
    </>
    
  )
}

export default App
