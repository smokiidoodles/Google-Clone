import '../App.css';

function FootBar({userLocationProp}) {

  return (
    <div className='Footer'>
     <ul className="Foot-Bar">
        <li>Advertising</li>
        <li>Business</li>
    </ul>
    <p>{userLocationProp}</p>
    <ul className="Foot-bar-two">
        <li>Privacy</li>
        <li>Terms</li>
        <li>Settings</li>
        </ul>
    </div>
  );
}

export default FootBar;