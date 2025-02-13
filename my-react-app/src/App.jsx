import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Card from './components/Card';
//import warm from "./assets/warm.png";
import Wrapper from './components/Wrapper';
import ProfileForm from "./components/ProfileForm";
import { useEffect } from 'react';


const App = () => {
  // const profiles =[
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => res.json())
  //         .then((data) => (console.log("Fetching...");
  //             setText(data[0].title);
  //   })
  // ];
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setProfiles(data);
          console.log(data)
          //setText(data[0].title);
    })
  }, []);
  //variable to store the animation state
  const [animation, setAnimation] = useState(false);
  //function to update the animation state
  const handleAnimation = () => {
     setAnimation(false);
   } 

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
    setAnimation(true)
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true)
  }

  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
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

  const buttonStyle = {

  }

  const promise = new Promise((resolve, reject) => {
    // async operation
    if (promise) {
    resolve('Success!');
    } else {
    reject('Failure!');
    }
    });
    promise.then(result => {
    console.log(result); // success
    }).catch(error => {
    console.log(error); // failure
    }).finally(() => {
    console.log("Cleanup: This will always run, no matter what.");
    });

  const fetchData = async() => {
    try {
    const response = await fetch('https://api.example.com/data');
    // Check if the request was successful
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Wait for JSON parsing
    console.log(data); // Handle the fetched data
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    } finally {
    doSomething();
    }}
    fetchData();

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
        <ProfileForm />
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
            <button onClick={handleClear} style={buttonStyle}>Clear</button>
          </div>
          <div className="profile-cards">
            {/* {profiles.map((profile) => ( */}
            {filteredProfiles.map((profile) => (<Card key={profile.email} {...profile} animate={animation} updateAnimate={handleAnimation}/>))}
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
