import { useState } from 'react'

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Display = ({ text, counter }) => <div>{text} {counter}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setGoodValue = newgoodvalue =>
  {
    console.log("New good value", newgoodvalue)
    setGood(newgoodvalue)
  }

  const setNeutralValue = newneutralvalue => {
    console.log("New neutral value", newneutralvalue)
    setNeutral(newneutralvalue)
  }

  const setBadValue = newbadvalue => {
    console.log("New bad value", newbadvalue)
    setBad(newbadvalue)
  }

  const all = (good + neutral + bad)
  let average = 0
  let pospercent = 0
  if (all > 0)
  {
    average = (good - bad) / all
    pospercent = (good / all) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)}text="good"></Button>
      <Button handleClick={() => setNeutralValue(neutral + 1)}text="neutral"></Button>
      <Button handleClick={() => setBadValue(bad + 1)}text="bad"></Button>
      <h2>statistics</h2>
      <Display text="good" counter={good}/>
      <Display text="neutral" counter={neutral}/>
      <Display text="bad" counter={bad}/>
      <Display text ="all" counter={all}/>
      <Display text ="average" counter={average}/>
      <Display text ="positive" counter ={pospercent +" %"}/>
    </div>
  )
}

export default App