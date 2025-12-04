import { useState } from 'react'
import './css/App.css'
import Forside from './pages/forside'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Forside />
      </div>
    </>
  )
}

export default App
