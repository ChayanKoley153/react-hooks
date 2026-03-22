import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './hooks/useState/count'
import Colorpicker from './hooks/useState/colorpicker'
import Form from './hooks/useState/Form'
import Accordion from './hooks/useState/Accordion'
import Dropdown from './hooks/useState/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count /> */}
      {/* <Colorpicker/> */}
      {/* <Form/> */}
      {/* <Accordion/> */}
      <Dropdown/>
    </>
  )
}

export default App
