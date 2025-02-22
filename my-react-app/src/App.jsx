import { useState } from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import Card from './components/Card';
import {HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage';
import AddProfile from './pages/AddProfile';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ProfileDetailPage from './pages/ProfileDetailPage';
//import ProfileLayoutPage from './pages/ProfileLayoutPage';


const App = () => {
  const [mode, setMode ] = useState("light");

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <HashRouter>
      <header>
        <Navbar mode={mode} updateMode={handleModeChange}/>
      </header>
      <main className={mode === "light" ? " light" : "dark"}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/add-profile" element={<AddProfile/>} />
        <Route path="/profile/:id" element={<ProfileDetailPage/>}>
          <Route index element={<ProfileDetailPage/>} />
          <Route path="edit" element={<ProfileDetailPage/>} />
        </Route>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
    </HashRouter>
  );
};

export default App
