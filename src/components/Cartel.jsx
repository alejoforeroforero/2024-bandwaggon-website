import styles from "./Cartel.module.css";

const Cartel = ({ phrases }) => {
  console.log("Hola");
  return (
    <>
      {phrases.map((phrase, index) => {
        return (
          <p
            key={index}
            className={
              phrase.bold
                ? `${styles["big-text"]} ${styles["text-bold"]}`
                : styles["big-text"]
            }
          >
            {phrase.text}
          </p>
        );
      })}
    </>
  );
};

export default Cartel;
