import styles from "./BlurFocusTextHoverEffect.module.css"
import coder from "./assets/coder.avif";

const BlurFocusTextHoverEffect = () => {
  return (
    <section>
        <h2 className="font-semibold">Focus</h2>
        <img src={coder} alt="" />
    </section>
  )
}

export default BlurFocusTextHoverEffect