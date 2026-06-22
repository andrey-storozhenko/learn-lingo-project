"use client";

import TeacherList from "@/components/TeacherList/TeacherList";
import css from "./page.module.css";
import { getTeachers } from "@/services/teachers";
import { useEffect, useState } from "react";
import { Teacher } from "@/types/teacher";

const LIMIT = 1;

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [visibleCount, setVisibleCount] = useState(LIMIT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTeachers();
        setTeachers(data);
      } catch (error) {
        console.log("Loading error", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const visibleTeachers = teachers.slice(0, visibleCount);

  function loadMore() {
    setVisibleCount((prev) => prev + LIMIT);
  }

  const hasMore = visibleCount < teachers.length;

  if (loading) return <p>Loading...</p>;
  return (
    <div className={['container', css.teachersPage].join(' ')}>
      <TeacherList teachers={visibleTeachers} />
      {hasMore && (
        <button className={css.loadMoreButton} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
