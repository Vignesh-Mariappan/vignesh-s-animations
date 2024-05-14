import { Link, useParams } from "react-router-dom";
import styles from "./Animations.module.css";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import TextRevealEffect from "./TextRevealEffect/TextRevealEffect";
import MovingSquaresEffect from "./MovingSquaresEffect/MovingSquaresEffect";
import BlurFocusTextHoverEffect from "./BlurFocusTextHoverEffect/BlurFocusTextHoverEffect";
import ImageSliderEffect from "./ImageSliderEffect/ImageSliderEffect";
import RotatingRingEffect from "./RotatingRingEffect/RotatingRingEffect";
import FancyBorderLoading from "./FancyBorderLoading/FancyBorderLoading";
import SplitLoadingEffect from "./SplitLoadingEffect/SplitLoadingEffect";
import WavyEffect from "./WavyEffect/WavyEffect";
import CreativePopup from "./CreativePopup/CreativePopup";
import CreativeImageHoverEffect from "./CreativeImageHoverEffect/CreativeImageHoverEffect";
import BlackAndWhiteTextEffect from "./BlackAndWhiteTextEffect/BlackAndWhiteTextEffect";
import TextFadeInFadeOutEffect from "./TextFadeInFadeOutEffect/TextFadeInFadeOutEffect";
import LineLoadingEffect from "./LineLoadingEffect/LineLoadingEffect";
import NewtonsCradleEffect from "./NewtonsCradleEffect/NewtonsCradleEffect";
import CloudRainDropsEffect from "./CloudRainDropsEffect/CloudRainDropsEffect";

const Animations = () => {
  const { animationId } = useParams();
  const [ isHovering, setIsHovering ] = useState();

  return (
    <div className={`${styles.animationsContainer}`}>
        <Link to="/animation-list">
            <div className={`${styles.animationsContainer__backBtn} font-regular`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false) }>
                {
                    !isHovering ? (
                        <span style={{ color: "rgb(255, 252, 225)" }}>Back</span>
                    ) : (
                        <MdArrowBack size="2rem" color={"rgb(255, 252, 225)"} />
                    )
                }
            </div>
        </Link>

        { animationId === "1" && (<div className={`${styles.animationWrapper}`}><TextRevealEffect /></div>) }

        { animationId === "2" && (<div className={`${styles.animationWrapper}`}><MovingSquaresEffect /></div>) }

        { animationId === "3" && (<div className={`${styles.animationWrapper}`} style={{ "--background": "transparent" }}><BlurFocusTextHoverEffect /></div>) }

        { animationId === "4" && (<div className={`${styles.animationWrapper}`}><ImageSliderEffect /></div>) }

        { animationId === "5" && (<div className={`${styles.animationWrapper}`}><RotatingRingEffect /></div>) }

        { animationId === "6" && (<div className={`${styles.animationWrapper}`}><FancyBorderLoading /></div>) }

        { animationId === "7" && (<div className={`${styles.animationWrapper}`}><SplitLoadingEffect /></div>) }

        { animationId === "8" && (<div className={`${styles.animationWrapper}`}><CreativePopup /></div>) }

        { animationId === "9" && (<div className={`${styles.animationWrapper}`}><WavyEffect /></div>) }

        { animationId === "10" && (<div className={`${styles.animationWrapper}`}><CreativeImageHoverEffect /></div>) }

        { animationId === "11" && (<div className={`${styles.animationWrapper}`} style={{ "--background": "steelblue" }}><BlackAndWhiteTextEffect /></div>) }

        { animationId === "12" && (<div className={`${styles.animationWrapper}`}><TextFadeInFadeOutEffect /></div>) }

        { animationId === "13" && (<div className={`${styles.animationWrapper}`}><LineLoadingEffect /></div>) }

        { animationId === "14" && (<div className={`${styles.animationWrapper}`} style={{ "--background": "oklch(0.216758 0.023072 329.709)"}}><NewtonsCradleEffect /></div>) }

        { animationId === "15" && (<div className={`${styles.animationWrapper}`} style={{ "--background": "oklch(0.753513 0.138989 232.661)"}}><CloudRainDropsEffect /></div>) }
    </div>
  )
}

export default Animations