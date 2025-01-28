import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Card from './components/Card';
import warm from "./assets/warm.png";
import Wrapper from './components/Wrapper';


const App = () => {
  const profiles =[
    {
      img: warm,
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'a@a.com',
    },
    {
      img: warm,
      name: 'John Woe',
      title: 'Software Developer',
      email: 'c@a.com',
    },
    {
      img: warm,
      name: 'John Croe',
      title: 'Software Bugger',
      email: 'f@a.com',
    },
    {
      img: warm,
      name: 'John Yoe',
      title: 'Software Weaponizer',
      email: 'j@a.com',
    },
    {
      img: warm,
      name: 'John Toe',
      title: 'Software Developer',
      email: 'l@a.com',
    }
  ];
  //get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];


  const [count, setCount] = useState(0)
  const handleClick = ( ) => {
    console.log("Button clicked");
  };

  const [title, setTitle] = useState("");
  //update the title on change of the dropdown
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleClear = () => {
    setTitle("");
    setSearch("");
    console.log(setSearch());
  }

  const filteredProfiles = profiles.filter((profile) =>
    // if(title === ""){
    //   return true;
    // }
    // else{
    //   return profile.title === title;
    // }
    (title === "" || profile.title === title && profile.name.toLowerCase().includes(search.toLowerCase()))
  )
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Wrapper>
          <h1>Profile App</h1>
          <button onClick={handleClick}></button>
        </Wrapper>
      <Wrapper>
          <About />
       </Wrapper>
      <Wrapper>
        <div className="filter-wrapper">
          <div className="filter--select">
            <label htmlFor="title-select">Select a title:</label>
            <select id="title-select" onChange={handleTitleChange}>
              {titles.map((title) => (<option key={title} value={title}>{title}</option>))}
              {/* <option value="">All</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Software Bugger">Software Bugger</option>
              <option value="Software Weaponizer">Software Weaponizer</option> */}
            </select>
            <input type="text" 
              id="search"
              onChange={handleSearchChange}
              />
            </div>
            <button onClick={handleClear}>Clear</button>
          </div>
          <div className="profile-cards">
            {/* {profiles.map((profile) => ( */}
            {filteredProfiles.map((profile) => (<Card key={profile.email} {...profile} />))}
          </div>
        </Wrapper>
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
