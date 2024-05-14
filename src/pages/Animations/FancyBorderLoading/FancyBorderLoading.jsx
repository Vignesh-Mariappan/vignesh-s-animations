import styles from "./FancyBorderLoading.module.css"

const FancyBorderLoading = () => {
  return (
    <div className={styles["loading"]}>
        <span></span>
        <span></span>
        <span></span>
        <h5 className={`${styles["loading"]} font-semibold`}>
            Loading...
        </h5>
    </div>
  )
}

export default FancyBorderLoading