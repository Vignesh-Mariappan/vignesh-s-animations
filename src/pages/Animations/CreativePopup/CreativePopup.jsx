import styles from "./CreativePopup.module.css";

const CreativePopup = () => {

  return (
    <div className={`${styles.card}`}>
        <h2 className={`${styles.cardHeader} font-semibold`}>About Vignesh</h2>
        <p className="font-regular">
            An Innovative Front End Developer with 6 years experience building and maintaining responsive websites in fast-paced, collaborative environments. Proficient in HTML5, CSS3, JS(ES5 & ES6), Bootstrap4, SCSS, Responsive web design, React JS, RxJS, Styled components, Ant design & React Redux. Passionate front-end web developer to build all aspects of the user experience and user interface for client-facing landing pages.
        </p>
    </div>
  )
}

export default CreativePopup