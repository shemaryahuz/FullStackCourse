import { useState } from 'react'
import './App.css'
import PollContainer from './components/PollContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mini Poll</h1>
      <PollContainer />
    </div>
  )
}

export default App
