
import css from "./HeroStats.module.css";

export default function HeroStats() {
  return (
    <div className={css.stats}>
          <ul className={css.statsList}>
              <li>
                <p className={css.statsAmount}>32,000 +</p>
                <p className={css.statsText}>Experienced <br/>tutors</p>
              </li>
              <li>
                <p className={css.statsAmount}>300,000 +</p>
                <p className={css.statsText}>5-star tutor <br/>reviews</p>
              </li>
              <li>
                <p className={css.statsAmount}>120 +</p>
                <p className={css.statsText}>Subjects <br/>taught</p>
              </li>
              <li>
                <p className={css.statsAmount}>200 +</p>
                <p className={css.statsText}>Tutor <br/>nationalities</p>
              </li>
        </ul>
    </div>
  );
}
