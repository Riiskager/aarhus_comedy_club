import { Route, Routes } from "react-router";
import BookingInfo from "./components/BookingInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/App.css";
import Bekraeft from "./pages/Bekraeft";
import Betal from "./pages/Betal";
import Event from "./pages/Event";
import Forside from "./pages/Forside";
import Gavekort from "./pages/Gavekort";
import Improholdet from "./pages/Improholdet";
import Komikerliste from "./pages/Komikerliste";
import Kontakt from "./pages/Kontakt";
import Omos from "./pages/Omos";
import Opret from "./pages/Opret";
import Program from "./pages/Program";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Forside />} />
        <Route path="/gavekort" element={<Gavekort />} />
        <Route path="/booking" element={<BookingInfo />} />
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

      <Footer />
    </>
  );
}

export default App;
