import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.css";
import Betal from "./pages/betal";
import Event from "./pages/event";
import Gavekort from "./pages/gavekort";
import Improholdet from "./pages/improholdet";
import Kontakt from "./pages/kontakt";
import Opret from "./pages/opret";
import Bekraeft from "./pages/bekraeft";
import Faq from "./pages/faq";
import Forside from "./pages/forside";
import Komikerliste from "./pages/komikerliste";
import Omos from "./pages/omos";
import Program from "./pages/program";
import BookingInfo from "./components/BookingInfo";

function App() {
 
 return (
    <>
      <Header />
      <Routes>
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Forside />} />
        <Route path="/gavekort" element={<Gavekort />} />
        <Route path="/booking" element={<BookingInfo/>} />
        <Route path="/komikerliste" element={<Komikerliste />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/admin" element={<Opret />} />
        <Route path="/program" element={<Program />} />
        <Route path="/impro-holdet" element={<Improholdet />} />
        <Route path="/historie" element={<Omos />} />
        <Route path="/betaling" element={<Betal />} />
        <Route path="/bekræft" element={<Bekraeft />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    
      <Footer/> 
       </>
  
  );
}

export default App;
