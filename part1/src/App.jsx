import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app can be used by pressing the buttons</div>
  }
  return <div>button press history: {allClicks.join(' ')}</div>
}

const App = () => {
  const [value, setValue] = useState(10)
  const [history, setHistory] = useState([])

  const setToValue = newValue => {
    console.log('Value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display counter={value}/>
      <Button handleClick={() => setToValue(1000)}text="thousand" />
      <Button handleClick={() => setToValue(0)}text="reset"/>
      <Button handleClick={() => setToValue(value + 1)}text="increment"/>
    </div>
  )
}

export default App