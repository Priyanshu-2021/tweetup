import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'; 
function MainNavigation() {
  return (
  <header className={classes.header}>
    <div className={classes.logo}> React meetups </div>
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/"> All meetup</Link>
          </li>
          <li>
            <Link to="/fav"> Favourites</Link>
          </li>
          <li>
            <Link to="/new"> Add Newmeet</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>);
}

export default MainNavigation;
