"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  // extract cid from the URL, e.g. /Courses/1234/Home
  const parts = pathname.split("/");
  const cid = parts[2]; // "1234"

  return (
    <div id="wd-course-navigation">
      <ul>
        <li><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
        <li><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
        <li><Link href={`/Courses/${cid}/Piazza`}>Piazza</Link></li>
        <li><Link href={`/Courses/${cid}/Zoom`}>Zoom</Link></li>
        <li><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
        <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
        <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
        <li><Link href={`/Courses/${cid}/People`}>People</Link></li>
      </ul>
    </div>
  );
}

