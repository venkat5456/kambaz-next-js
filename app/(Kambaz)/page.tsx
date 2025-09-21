import Link from "next/link";

export default function KambazLanding() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>Kambaz Application</h1>
      <p>Welcome to Kambaz prototype.</p>
      <p><Link href="/(Kambaz)/Account/Signin">Go to Signin</Link></p>
    </main>
  );
}
