import '../App.css';
import More from './more-icon.png';
import User from './userIcon.png';

function TopBar() {
  return (
    <div>

     <ul className="Top-bar">
        <li>About</li>
        <li>Store</li>
    </ul>
    <ul className="Top-bar-two">
        <li>Gmail</li>
        <li>Images</li>
        <li><img className='more-button' src={More} alt='More'></img></li>
        <li><img className='user-icon' src={User} alt='User'></img></li>
     </ul>
    </div>
  );
}

export default TopBar;
