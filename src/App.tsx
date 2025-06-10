import "./App.css";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Clinics from "./pages/Clinics";
import MedicalStaff from "./pages/MedicalStaff";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/staff" element={<MedicalStaff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
