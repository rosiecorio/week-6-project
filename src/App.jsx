import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [bought, setBought] = useState(0)

  return (
    <div className="pageContainer">
      <Header bought={bought}/>
      <Main bought={bought} setBought={setBought}/>
      <Footer />
    </div>
  )
}

export default App
