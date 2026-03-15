import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './hooks/useState/count'
import Colorpicker from './hooks/useState/colorpicker'
import Form from './hooks/useState/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count /> */}
      {/* <Colorpicker/> */}
      <Form/>
    </>
  )
}

export default App
