

import Cartel from "@/components/Cartel";

import videoPlaceholder from '@/assets/imgs/video-placeholder.png';
import styles from "./Manifesto.module.css";

const Manifesto = () => {
  const phrases = [
    {
      text: "BANDWAGGON",
      bold: true,
    },
    {
      text: "EMPLOYS AI",
      bold: false,
    },
    {
      text: "TO MANAGE",
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
    <div className={styles["manifiesto"]}>
      <div className={styles["left"]}>
        <div className={styles["cartel"]}>
          <Cartel phrases={phrases} />
        </div>
        <div className={styles["phrase"]}>
          <h2>
            MADE BY MUSICIANS,<br></br>FOR MUSICIANS
          </h2>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["right-text"]}>
          <h2>FOR CREATIVES & BUSINESSES</h2>
          <p>
            Many musicians are passionate about their music, but struggle with
            the business side: scheduling gigs, finding studios, and planning
            tours eats up their creative time. They often lack industry
            knowledge and connections, making it hard to find the best
            opportunities. Traditional managers can be expensive. This
            AI-powered band manager solves these problems. It acts as a tireless
            assistant, using data to find perfect gigs and deals, freeing
            matadae decisions, and efficiendy aar contribute to the band's
            success.
          </p>
        </div>

        <div className={styles["right-video"]} >
          <img src={videoPlaceholder} alt="video-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
