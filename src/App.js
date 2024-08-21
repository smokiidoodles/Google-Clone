import Logo from './google-logo.png';
import TopBar from './components/nav.js';
import Search from './components/search.js';
import FootBar from './components/footer.js';
import './App.css';

function App() {

  const userLocation= "United Kingdom";
  return (
    <div className="App">
      <div className= "grid-container">
       <p>
      <TopBar/>
      </p>
      <img className="Google" src= {Logo} alt='google'/>
     </div>
     <Search/>
     <div className='Buttons'>
     <button>Google Search</button>
      <button>I'm Feeling Lucky</button>
     </div>
    <FootBar userLocationProp= {userLocation}/>
    <a href='https://www.google.com/'> Original Google</a>
    </div>
  );
}

export default App;
