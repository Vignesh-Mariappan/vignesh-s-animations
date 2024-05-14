import styles from "./SplitLoadingEffect.module.css";

const SplitLoadingEffect = () => {
  return (
    <div className={`${styles.loader} font-regular`}>
        <span className={`${styles.topHalf}`}>Loading</span>
        <span className={`${styles.bottomHalf}`}>Loading</span>
    </div>
  )
}

export default SplitLoadingEffect