import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './assets/About'
import Login from './assets/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1>Bank of flatiron</h1>
     <About/>
     <Login/>
    </>
  )
}

export default App
