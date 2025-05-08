import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
