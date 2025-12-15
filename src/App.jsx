import { Route, Routes } from "react-router";
import BookingInfo from "./components/bookinginfo";
import Footer from "./components/footer";
import Header from "./components/header";
import "./css/App.css";
import Betal from "./pages/Betal";
import Event from "./pages/Event";
import Gavekort from "./pages/Gavekort";
import Improholdet from "./pages/Improholdet";
import Kontakt from "./pages/Kontakt";
import Opret from "./pages/Opret";
import Bekræft from "./pages/bekaeft";
import Faq from "./pages/faq";
import Forside from "./pages/forside";
import Komikerliste from "./pages/komikerliste";
import Omos from "./pages/omos";
import Program from "./pages/program";

function App() {
  return (
    <>
      {" "}
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
        <Route path="/bekræft" element={<Bekræft />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
