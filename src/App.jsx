import { useState } from 'react'
import './App.css'
import BubbleAnimation from './components/BubbleAnimation'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <About/>
      <BubbleAnimation/>
      <Footer/>
    </div>
    </>
  )
}

export default App
