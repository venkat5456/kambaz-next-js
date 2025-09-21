import Link from "next/link";

export default function Home() {
  return (
    <div id="wd-landing-page">
      <h2>Landing Page</h2>
      <p>Student: Atluri Sai Venkat</p>
      <p>Section: CS5610.02</p>
      <ul>
        <li><Link href="/Labs/Lab1">Lab 1 Page</Link></li>
        <li><Link href="/Labs">All Labs</Link></li>
        <li><Link href="/Account/Signin">Kambaz Application</Link></li>
        <li><a href="https://github.com/venkat5456/kambaz-next-js" target="_blank">Source Code</a></li>
        <li><a href="https://github.com/venkat5456/kambaz-next-js" target="_blank">Repository (Kambaz + Labs)</a></li>
      </ul>
    </div>
  );
}

