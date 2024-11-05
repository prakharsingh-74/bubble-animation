import { useState } from 'react'
import './App.css'
import BubbleAnimation from './components/BubbleAnimation'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import Portfolio from './components/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <About/>
      <Services/>
      <Portfolio/>
      <BubbleAnimation/>
      <Footer/>
    </div>
    </>
  )
}

export default App
