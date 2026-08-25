import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./pages/Home";
import Footer from "./Footer";
import Results from "./pages/Results";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuClick={() => setSidebarOpen(true)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
