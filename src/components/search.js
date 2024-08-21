import '../App.css';
import SearchComp from "./search-icon.png";
import CameraComp from "./camera-icon.png";


function Search() {
  return (
  <div className= "search">
      <form className="wholeSearch">
        <div className="searchBox">
        <img className="searchIcon" src= {SearchComp} alt="search"></img>
        <input className="searchInput" type="text" placeholder="" name="search"></input>
        <img  className="cameraIcon" src= {CameraComp} alt="camera"></img>
        </div>
      </form>
</div>
  )
}

export default Search;