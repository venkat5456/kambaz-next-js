"use client";

import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <div id="wd-assignments">
      <h2>ASSIGNMENTS 40% of Total</h2>
      <button>+</button>
      <br />
      <br />

      <ul>
        <li>
          <Link href="/Courses/1234/Assignments/A1">
            <span style={{ fontWeight: "bold", color: "blue" }}>
              A1 – ENV + HTML
            </span>
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <br />
        <li>
          <Link href="/Courses/1234/Assignments/A2">
            <span style={{ fontWeight: "bold", color: "blue" }}>
              A2 – CSS + BOOTSTRAP
            </span>
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |{" "}
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <br />
        <li>
          <Link href="/Courses/1234/Assignments/A3">
            <span style={{ fontWeight: "bold", color: "blue" }}>
              A3 – JAVASCRIPT + REACT
            </span>
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |{" "}
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
  );
}

