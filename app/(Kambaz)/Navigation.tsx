import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        width: "220px",
        background: "#f9f9f9",
        borderRight: "1px solid #ddd",
        padding: "20px",
      }}
    >
      <h3>Kambaz Navigation</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <a href="https://www.northeastern.edu" target="_blank" rel="noreferrer">
            NEU
          </a>
        </li>
        <li>
          <Link href="/Account">Account</Link>
        </li>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/Courses">Courses</Link>
        </li>
        <li>
          <Link href="/Calendar">Calendar</Link>
        </li>
        <li>
          <Link href="/Inbox">Inbox</Link>
        </li>
        <li>
          <Link href="/Labs">Labs</Link>
        </li>
        <li>
          <Link href="/Quizzes">Quizzes</Link>
        </li>
        <li>
          <Link href="/Assignments">Assignments</Link>
        </li>
        <li>
          <Link href="/Grades">Grades</Link>
        </li>
      </ul>
    </nav>
  );
}

