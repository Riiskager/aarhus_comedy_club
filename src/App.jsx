
import './css/App.css'
import Forside from './pages/forside'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router'
import Kontakt from './pages/Kontakt'
import Gavekort from './pages/Gavekort'
import Footer from './components/footer'
import BookingInfo from './components/bookinginfo'
import Komikerliste from './pages/komikerliste'
import Event from './pages/Event'

function App() {
 
 return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Forside />} />
        <Route path="/gavekort" element={<Gavekort/>}/>
        <Route path="/booking" element={<BookingInfo/>}/>
        <Route path="/komikerliste" element={<Komikerliste/>}/>
        <Route path="/event/:id" element={<Event/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
