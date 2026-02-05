import { useState } from 'react'

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) =>
{
  if(props.all > 0) {
    return (
        <div>
          <h2>statistics</h2>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.all}</p>
          <p>average {props.average}</p>
          <p>positive {props.positive + " %"}</p>
        </div>
      )
  }
  else {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
}

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
  let positive = 0
  if (all > 0)
  {
    average = (good - bad) / all
    positive = (good / all) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)}text="good"></Button>
      <Button handleClick={() => setNeutralValue(neutral + 1)}text="neutral"></Button>
      <Button handleClick={() => setBadValue(bad + 1)}text="bad"></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        ></Statistics>
    </div>
  )
}

export default App