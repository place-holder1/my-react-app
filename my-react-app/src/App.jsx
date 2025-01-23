import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card from './components/Card';
import warm from "./assets/warm.png"

const App = () => {
  const [count, setCount] = useState(0)
  const profiles =[
    {
      img:warm,
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'a@a.com'
    }
  ]
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="section">
        <div className="container">
          <h1>Profile App</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <About />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="profile-cards">
            {profiles.map(profile =>  <Card img={profile.img} name={profile.name} title={profile.title} email={profile.email} />)}
              
          </div>
        </div>
      </div>
    </main>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
