import Link from "next/link";

export default function Assignments({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-assignments">
      <h2>Assignments for Course {params.cid}</h2>
      <ul>
        <li><Link href={`/Courses/${params.cid}/Assignments/123`}>Assignment 123</Link></li>
        <li><Link href={`/Courses/${params.cid}/Assignments/234`}>Assignment 234</Link></li>
      </ul>
    </div>
  );
}

