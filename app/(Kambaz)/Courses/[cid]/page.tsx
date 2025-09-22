import Link from "next/link";

export default function Course({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-course">
      <h2>Course ID: {params.cid}</h2>
      <ul>
        <li><Link href={`/Courses/${params.cid}/Modules`}>Modules</Link></li>
        <li><Link href={`/Courses/${params.cid}/Assignments`}>Assignments</Link></li>
        <li><Link href={`/Courses/${params.cid}/Quizzes`}>Quizzes</Link></li>
        <li><Link href={`/Courses/${params.cid}/Grades`}>Grades</Link></li>
        <li><Link href={`/Courses/${params.cid}/People`}>People</Link></li>
      </ul>
    </div>
  );
}

