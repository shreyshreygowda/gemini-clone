import React from 'react'
import Sidebar from './components/Sidebar/sidebar'
import {useEffect } from "react"; // Import useEffect here

const App = () => {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = "Gemini Clone";
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App;
