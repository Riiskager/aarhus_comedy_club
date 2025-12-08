
import './css/App.css'
import Forside from './pages/forside'
import Header from './components/header'
import ForsideKarrusel from './components/forside-karrusel'
import { BrowserRouter, Routes, Route } from 'react-router'
import Kontakt from './pages/Kontakt'

function App() {
 
 return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Forside />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
