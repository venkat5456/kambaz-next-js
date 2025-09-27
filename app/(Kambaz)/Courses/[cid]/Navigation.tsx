"use client";
import Link from "next/link";

export default function CourseNavigation() {
  return (
    <div id="wd-course-navigation">
      <ul>
        <li><Link href="Home">Home</Link></li>
        <li><Link href="Modules">Modules</Link></li>
        <li><Link href="Piazza">Piazza</Link></li>
        <li><Link href="Zoom">Zoom</Link></li>
        <li><Link href="Assignments">Assignments</Link></li>
        <li><Link href="Quizzes">Quizzes</Link></li>
        <li><Link href="Grades">Grades</Link></li>
      </ul>
    </div>
  );
}


