import { Link } from "react-router-dom";

import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles['nav-menu']}>
      <ul>
        <li>
          <Link to="/manifesto"> MANIFESTO</Link>
        </li>
        <li>
          <Link to="/how-it-works">HOW IT WORKS</Link>
        </li>
        <li>
          <Link to="/artist">ARTIST</Link>
        </li>
        <li>
          <Link to="/music-business">MUSIC BUSINESS</Link>
        </li>
        <li>
          <Link to="/team">TEAM</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
