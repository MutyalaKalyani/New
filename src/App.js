import React from 'react'
import Nav_bar from './components/Nav_bar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  {LivePage} from './components/LivePage'
import {Uploads} from "./components/Uploads"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav_bar/>} >
        <Route path='LivePage' element={<LivePage/>} />
        <Route path='uploads' element={<Uploads/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App