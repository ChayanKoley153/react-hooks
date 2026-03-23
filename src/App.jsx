import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './hooks/useState/count'
import Colorpicker from './hooks/useState/colorpicker'
import Form from './hooks/useState/Form'
import Accordion from './hooks/useState/Accordion'
import Dropdown from './hooks/useState/Dropdown'
import Parent from './hooks/useParmas/parent/Parent'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Child from './hooks/useParmas/child/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count /> */}
      {/* <Colorpicker/> */}
      {/* <Form/> */}
      {/* <Accordion/> */}
      {/* <Dropdown/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/child/:id" element={<Child/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
