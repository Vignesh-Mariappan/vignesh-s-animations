import styles from './CloudRainDropsEffect.module.css';

const CloudRainDropsEffect = () => {
  return (
    <div className={styles["cloudRainEffectContainer"]}>
        <div className={styles["cloud"]}></div>
        <div className={styles["rain"]}>
            <span className={styles["rain-drop"]} style={{ "--seconds": "11" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "14" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "18" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "20" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "15" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "16" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "17" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "12" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "10" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "20" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "16" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "13" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "18" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "10" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "13" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "11" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "14" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "12" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "15" }}></span>
            <span className={styles["rain-drop"]}  style={{ "--seconds": "17" }}></span>
        </div>
    </div>
  )
}

export default CloudRainDropsEffect