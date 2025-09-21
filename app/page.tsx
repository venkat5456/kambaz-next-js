import Link from "next/link";

export default function Landing() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>Landing Page</h1>
      <p><strong>Student:</strong> Atluri Sai Venkat</p>
      <p><strong>Section:</strong> CS5610.02</p>

      <h2>Navigation</h2>
      <ul>
        <li><Link href="/Lab1">Lab 1 Page</Link></li>
        <li><Link href="/Dashboard">Kambaz Application</Link></li>
      </ul>

      <h2>Source Code</h2>
      <ul>
        <li>
          <a href="https://github.com/venkat5456/kambaz-next-js" target="_blank">
            Repository (Kambaz + Labs)
          </a>
        </li>
      </ul>
    </main>
  );
}

