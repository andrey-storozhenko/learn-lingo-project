"use client"
import { useState } from "react";
import css from "./TeacherCard.module.css";
import { Teacher } from "@/types/teacher";
import Image from "next/image";

interface TeacherCardProps{
    teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.teacherContainer}>
        <div className={css.avatar}>
        <Image className={css.avatarImg} src={teacher.avatar_url} width={120} height={120} alt="avatar" unoptimized/>
        </div>
        <div className={css.teacherInfo}>
            <div className={css.teacherInfoContainer}>
              <ul className={css.teacherInfoList}>
                  <li>
                    <p>Lessons online</p>
                  </li>
                  <li>
                      <p>Lessons done: {teacher.lessons_done}</p>
                  </li>
                  <li>
                    <p>Rating: {teacher.rating}</p>
                  </li>
                  <li>
                    <p>Price / 1 hour: <span className={css.greenMark}>{teacher.price_per_hour}$</span></p>
                  </li>
              </ul>
              <button>Favourite</button>
            </div>
        <h3 className={css.teacherName}>{teacher.name}</h3>
        <p className={css.teacherLanguages}><span className={css.greyMark}>Speaks:</span> {teacher.languages.join(", ")}</p>
        <p className={css.lessonInfo}><span className={css.greyMark}>Lesson Info:</span> {teacher.lesson_info}</p>
        <p className={css.conditions}><span className={css.greyMark}>Conditions:</span> {teacher.conditions}</p>
        {isOpen && <p className={css.experience}>{teacher.experience}</p>}
        <button onClick={() => setIsOpen(!isOpen)} className={css.readMoreButton}>{isOpen ? "Read less" : "Read more"}</button>
        <ul className={css.levelList}>
          {teacher.levels.map((level, index) => (
            <li className={css.levelListItem} key={index}>
              <p className={css.levelText}>{level}</p>
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}
