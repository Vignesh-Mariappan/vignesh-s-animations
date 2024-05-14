import styles from "./CreativeImageHoverEffect.module.css"

const CreativeImageHoverEffect = () => {
  return (
    <div className={styles.container}>
        <div className={`${styles.clip} ${styles.clip1}`}></div>
        <div className={`${styles.clip} ${styles.clip2}`}></div>
        <div className={`${styles.clip} ${styles.clip3}`}></div>
    </div>
  )
}

export default CreativeImageHoverEffect