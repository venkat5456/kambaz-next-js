import Link from "next/link";

export default function Lab1() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>Lab 1 – Labs Landing</h1>
      <p><strong>Student:</strong> Atluri Sai Venkat</p>
      <p><strong>Section:</strong> SECTION_XX</p>

      <h2 style={{ marginTop: 24 }}>Lab Exercises</h2>
      <ul>
        {/* If you create real pages later, change these to <Link href="/Lab1/Lab1a"> etc. */}
        <li><a href="#lab1a">Lab 1A – Environment + HTML</a></li>
        <li><a href="#lab1b">Lab 1B – CSS (placeholder)</a></li>
        <li><a href="#lab1c">Lab 1C – Bootstrap (placeholder)</a></li>
      </ul>

      <h2 id="lab1a" style={{ marginTop: 24 }}>Lab 1A – Environment + HTML</h2>
      <p>This lab covers setting up the environment and a simple HTML page.</p>

      <h2 id="lab1b" style={{ marginTop: 24 }}>Lab 1B – CSS</h2>
      <p>Placeholder for CSS lab details.</p>

      <h2 id="lab1c" style={{ marginTop: 24 }}>Lab 1C – Bootstrap</h2>
      <p>Placeholder for Bootstrap lab details.</p>

      <h2 style={{ marginTop: 24 }}>Quick Links</h2>
      <ul>
        <li><Link href="/">Back to Landing Page</Link></li>
        <li><Link href="/Dashboard">Go to Kambaz (Dashboard)</Link></li>
      </ul>
    </main>
  );
}
