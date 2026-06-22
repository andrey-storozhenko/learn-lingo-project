
import css from "./TeacherList.module.css";
import { Teacher } from "@/types/teacher";
import TeacherCard from "@/components/TeacherCard/TeacherCard";

interface TeacherListProps{
    teachers: Teacher[],
}

export default function TeacherList({teachers}:TeacherListProps) {
  return (
    <div className={css.teachersList}>
          {teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher}/>
          ))}
    </div>
  );
}
