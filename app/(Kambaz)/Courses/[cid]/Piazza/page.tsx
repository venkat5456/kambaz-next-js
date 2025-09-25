"use client";

export default function PiazzaPage() {
  return (
    <div id="wd-piazza">
      <h2>Piazza Discussions</h2>
      <p>
        Go to our class Piazza forum here:{" "}
        <a
          href="https://piazza.com/class/example"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Piazza Class Forum
        </a>
      </p>

      <h3>Recent Posts</h3>
      <ul>
        <li>
          <strong>Homework 1 Clarification</strong> – Posted by Alice
        </li>
        <li>
          <strong>Exam Review Resources</strong> – Posted by Jose
        </li>
        <li>
          <strong>Project Teams</strong> – Posted by Annun
        </li>
      </ul>
    </div>
  );
}
