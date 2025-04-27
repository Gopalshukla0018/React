import { useState } from 'react'
import './App.css'
import Card from './Components/card'  


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
        <h1 className='bg-green-400 rounded-xl font-serif italic '  >Tailwind Test</h1>

     <Card username="chai aur code" btnText="visit Me" />
     <Card username="Gopal shukla"  btnText="Gopal shukla" />



    </>
  )
}

export default App
