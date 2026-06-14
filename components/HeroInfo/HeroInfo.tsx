
import css from "./HeroInfo.module.css";

export default function HeroInfo() {
  return (
    <div className={css.heroInfo}>
        <h1>Unlock your potential with <br/>the best <span className={css.languageMarker}>language</span> tutors</h1>
        <p className={css.heroText}>Embark on an Exciting Language Journey with Expert Language <br/>Tutors: Elevate your language proficiency to new heights by <br/>connecting with highly qualified and experienced tutors.</p>
        <button className={css.heroButton}>Get started</button>
    </div>
  );
}
