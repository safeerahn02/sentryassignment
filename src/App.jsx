import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function handleerror(){
  throw new Error("Error")
}
function App() {
    return (
      <>
        <button onClick={handleerror}>test</button>
      </>
    )
}

export default App
