import styles from "./BlackAndWhiteTextEffect.module.css";

const BlackAndWhiteTextEffect = () => {
  return (
    <div className={`${styles["blackAndWhiteTextContainer"]} font-semibold`}>
        <h3>Black</h3>
        <h3>White</h3>
    </div>
  )
}

export default BlackAndWhiteTextEffect