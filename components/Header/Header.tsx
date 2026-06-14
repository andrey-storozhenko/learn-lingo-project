
import css from "./Header.module.css";

export default function Header() {
    return (
            <div className={['container', css.header].join(' ')}>
                <p>LearnLingo</p>
                <ul className={css.navList}>
                    <li>
                        <p className={css.navText}>Home</p>
                    </li>
                    <li>
                        <p className={css.navText}>Teachers</p>
                    </li>
                </ul>
                <div className={css.login}>
                    <p>Log in</p>
                    <button>Registration</button>
                </div>
            </div>
  );
}
