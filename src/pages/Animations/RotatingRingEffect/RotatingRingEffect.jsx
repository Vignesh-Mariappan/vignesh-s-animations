import styles from "./RotatingRingEffect.module.css";

const RotatingRingEffect = () => {
  return (
    <div className={`${styles["container"]}`}>
        <div className={`${styles["text"]} font-semibold`}>Loading...</div>
        <div className={`${styles["ring"]}`}></div>
    </div>
  )
}

export default RotatingRingEffect