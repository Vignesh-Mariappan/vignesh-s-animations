import styles from './HomeHero.module.css';
import SpinnerFidget from "./assets/SpinnerFidget.svg";
import StarSpinner from "./assets/StarSpinner.svg"; 
import HighVoltage from "./assets/HighVoltage.svg";
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <div className={`font-semibold ${styles.homeHero}`}>
      <div className={`${styles.homeHeroContainer}`}>
        <div className={`${styles.homeHero__inner}`}>
            <div className={styles.homeHero__heading}>
                <div className={`${styles["homeHero__heading-text"]} ${styles["heading-xl"]}`}>
                    <div className={`${styles["homeHero__vigneshs"]}`}>
                        <span className={`${styles["letter-V"]}`}>V</span>
                        <span className={`${styles["letter-I-container"]}`}>
                            <img className={styles.fidgetSpinner} src={SpinnerFidget} alt="" />
                            <img className={styles.starSpinner} src={StarSpinner} alt="" />
                            <span className={`${styles["letter-I"]}`}>i</span>
                        </span>
                        <span className={`${styles["letter-G"]}`}>g</span>
                        <span className={`${styles["letter-N"]}`}>n</span>
                        <span className={`${styles["letter-E"]}`}>e</span>
                        <span className={`${styles["letter-S"]}`}>s</span>
                        <span className={`${styles["letter-H"]}`}>h</span>
                        <span className={`${styles["single-quote"]}`}>&apos;</span>
                        <span className={`${styles["letter-S-2"]}`}>s</span>
                    </div>

                    <div className={`${styles["homeHero__animations"]}`}>
                        <span className={`${styles["letter-A-container"]}`}>
                            <span className={`${styles["letter-A-dup"]}`}>a</span>
                            <span className={`${styles["letter-A"]}`}>a</span>
                        </span>

                        <span className={`${styles["letter-N"]}`}>n</span>
                        <span className={`${styles["letter-I"]}`}>i</span>
                        <span className={`${styles["letter-M"]}`}>m</span>
                        <span className={`${styles["letter-A-2"]}`}>a</span>

                        <span className={`${styles["letter-T-container"]}`}>
                            <img className={styles.highVoltage} src={HighVoltage} alt="" />
                            <span className={`${styles["letter-T"]}`}>t</span>
                        </span>

                        <span className={`${styles["letter-I-2"]}`}>i</span>
                        <span className={`${styles["letter-O"]}`}>o</span>
                        <span className={`${styles["letter-N-2"]}`}>n</span>
                        <span className={`${styles["letter-V"]}`}>s</span>
                    </div>  
                </div>
            </div>
            <Link to={"/animation-list/"}>
              <button className={styles.homeHero__btn}>
                Getting Started
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero