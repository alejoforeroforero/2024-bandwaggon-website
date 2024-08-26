import Cartel from "@/components/Cartel";
import logo from "@/assets/imgs/logo.svg";
import logoType from "@/assets/imgs/logo-type.svg";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const phrases = [
    {
      text: "LEVEL UP",
      bold: true,
    },
    {
      text: "YOUR MUSIC",
      bold: false,
    },
    {
      text: "CAREER",
      bold: true,
    },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["hero"]}>
        <div>
          <img className={styles["logo"]} src={logo} alt="logo" />
          <img className={styles["logo-type"]} src={logoType} alt="logo-type" />
        </div>
      </div>
      <div className={styles["contents"]}>
        <div className={styles["left"]}>
          <div className={styles["cartel"]}>
            <Cartel phrases={phrases} />
          </div>
        </div>
        <div className={styles["right"]}>
          <p>
            Music creation? You're a pro. <br />
            Band management? Not so much.
            <br />
            Our Al assisted band manager helps handle booking gigs, <br />
            studios, tours - all the <br />
            business headaches - so you can focus on <br />
            your next opus.
          </p>
          <button>JOIN THE WAITING LIST</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
