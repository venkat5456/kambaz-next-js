
import Link from "next/link";

export default function Signin() {
  return (
    <div>
      <h3>Sign in</h3>
      <input placeholder="username" /><br />
      <input placeholder="password" type="password" /><br />
      
      {/* When user clicks Sign in → go to Dashboard */}
      <Link href="/Dashboard">Sign in</Link><br />

      {/* A link for new users to go to Signup */}
      <Link href="/Account/Signup">Sign up</Link>
    </div>
  );
}
