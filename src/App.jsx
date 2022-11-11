import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Result from './pages/Result'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      {/* <Form/> */}
      {/* <Result/> */}
    </BrowserRouter>
    
  )
}

export default App