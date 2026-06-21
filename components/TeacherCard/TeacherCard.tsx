
import css from "./TeacherCard.module.css";
import { Teacher } from "@/types/teacher";

interface TeacherCardProps{
    teacher: Teacher;
}

export default function TeacherCard({teacher}:TeacherCardProps) {
  return (
    <div>
        <div className={css.avatar}></div>
        <div className={css.teacherInfo}>
              <ul>
                  <li>
                    <p>Lessons online</p>
                  </li>
                  <li>
                      <p>{teacher.name}</p>
                  </li>
                  <li>
                    <p></p>
                  </li>
                  <li>
                    <p></p>
                  </li>
              </ul>    
        </div>
    </div>
  );
}
