import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreatBooks from './pages/CreatBooks.jsx'
import DeleteBooks from './pages/DeleteBooks.jsx'
import EditeBooks from './pages/EditeBooks.jsx'
import ShowBooks from './pages/ShowBooks.jsx'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreatBooks/>}/>
    <Route path='/books/details/:id' element={<ShowBooks/>}/>
    {/* <Route path='/books/edite/:id' element={<EditeBooks/>}/> */}
    <Route path='/books/edit/:id' element={<EditeBooks />} />

    <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
  </Routes>
  )
}

export default App

