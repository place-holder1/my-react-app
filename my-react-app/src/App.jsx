// import { useState } from 'react'
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
import { ModeProvider, ModeContext } from './contexts/ModeContext';
import { useContext } from 'react'
//import ProfileLayoutPage from './pages/ProfileLayoutPage';


const App = () => {
  const { mode } = useContext(ModeContext);

  return (
    <ModeProvider>
    <HashRouter>
      <header>
        <Navbar />
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
    </ModeProvider>
  );
};

export default App
