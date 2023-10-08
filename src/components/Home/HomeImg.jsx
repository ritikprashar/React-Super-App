import styles from "./HomeImg.module.css";
import bgImg from "../../assets/bg_home.png";
const Image = () => {
  return (
    <>
      <img src={bgImg} alt="" />
      <div className={styles.bottomText}>
        <p>
          Discover new things on
          <br />
          SuperApp
        </p>
      </div>
    </>
  );
};

export default Image;
