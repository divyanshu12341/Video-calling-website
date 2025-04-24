import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import VideoRoom from './Pages/VideoRoom'

const App = () => {
  return (
    <Routes >
      <Route path = '/' element = {<Home />} />
      <Route path = '/room/:roomId' element = {<VideoRoom />}></Route>
    </Routes>
  )
}

export default App