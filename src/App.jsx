import { useState } from 'react'
import './App.css'
import handleClick from './components/Function/test'

function App() {
  const [count, setCount] = useState(0)
 handleClick()
  return (
    <>
       
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
