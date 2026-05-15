import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Count from './hooks/useState/count'
import Colorpicker from './hooks/useState/colorpicker'
import Form from './hooks/useState/Form'
import Accordion from './hooks/useState/Accordion'
import Dropdown from './hooks/useState/Dropdown'
import Parent from './hooks/useParmas/parent/Parent'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Child from './hooks/useParmas/child/child'
import Search from './hooks/useEffect/props/Search'
import Home from './hooks/useEffect/Blog/home'
import Blog from './hooks/useEffect/Blog/blog'
import Author from './hooks/useEffect/Blog/author'
import ParentPure from './hooks/reactMemo/pureCom'
import Memo from './hooks/useCallback/Memo'
import Todos from './hooks/useCallback/todo/todo'
import CounterCusTom from './hooks/customHooks/counter/countercom'
import Users from './hooks/customHooks/apiCall/apiCom'
import Validation1 from './hooks/useMemo/validation'
import NotFound from './hooks/useEffect/Blog/notfound'
import FormValidation from './hooks/validation/form'
import Parent1 from './hooks/stateLifting/parent'
import Home1 from './hooks/stateLifting/cart/home'
import NewValidation from './hooks/validation/newForm'
import Updatestate from './practice/updatestate'
import ColorReducer from './hooks/useReducer/useReducerColor'
import IncrementReducer from './hooks/useReducer/useIncrement'
import Home2 from './hooks/useContext/home'
import DataProvider from './usersList/dataProvider'
import { List } from './usersList/list'
import { List1 } from './usersList/list1'
import { List2 } from './usersList/list2'



function App() {
  return (
    <>
      {/* <Count /> */}
      {/* <Colorpicker/> */}
      {/* <Form/> */}
      {/* <Accordion/> */}
      {/* <Dropdown/> */}
      {/* <Search /> */}
      {/* <ParentPure/> */}
      {/* <Memo/> */}
      {/* <Todos /> */}
      {/* <CounterCusTom /> */}
      {/* <Users/> */}
      {/* <Validation1 /> */}
      {/* <Parent1/> */}
      {/* <Home1/> */}
      {/* <FormValidation/> */}
      {/* <NewValidation/> */}
      {/* <Input/> */}
      {/* <Updatestate/> */}
      {/* <ColorReducer/> */}
      {/* <IncrementReducer/> */}

      {/* <ThemeProvider>
        <Home2/>
      </ThemeProvider> */}

      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/list1' element={<List/>} />
            <Route path='/list2' element={<List1/>} />
            <Route path='/list3' element={<List2/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider> 

      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/author/:authorId' element={<Author />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}

    </>
  )
}

export default App;
