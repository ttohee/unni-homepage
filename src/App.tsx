import "./App.css";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landingpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
