import { useState } from 'react'
import './App.css'
import SideBar from './SideBar'
function App() {
  return (
    <>
      <h1 className="text-5xl text-center text-green-600 font-bold">
        Hello world!
      </h1>
      <div className="flex">
          <SideBar />
      </div>
    </>
  )
}

export default App
