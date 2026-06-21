import TeacherList from "@/components/TeacherList/TeacherList";
import css from "./page.module.css";
import { getTeachers } from "@/services/teachers";

export default async function TeachersClient() {
  const teachers = await getTeachers();
  return (
    <div className={['container', css.header].join(' ')}>
      <TeacherList teachers={teachers}/>
    </div>
  );
}
