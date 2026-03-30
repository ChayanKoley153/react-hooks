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
import Child from './hooks/useParmas/child/child'
import Search from './hooks/useEffect/Search'

import Author from './hooks/useEffect/Blog/author'
import Home from './hooks/useEffect/Blog/props/home'
import Blog from './hooks/useEffect/Blog/props/blog'

function App() {


  return (
    <>
      {/* <Count /> */}
      {/* <Colorpicker/> */}
      {/* <Form/> */}
      {/* <Accordion/> */}
      {/* <Dropdown/> */}
      {/* <Search /> */}



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path='/author/:authorId' element={<Author />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
