import { Link } from "react-router-dom";
import Menu from "./Menu";

import logoImg from "@/assets/imgs/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["main-header"]}>
      <div className={styles["logo"]}>
        <Link to="/">
          {" "}
          <img src={logoImg} alt="logo" />
        </Link>
      </div>
      <div className={styles["menu"]}>
        <Menu />
      </div>
      <div className={styles["user"]}>Us</div>
    </div>
  );
};

export default Header;
