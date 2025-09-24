import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234">
            <div>
              <Image src="/images/react.svg" width={200} height={120} alt="React JS" />
              <h5>CS1234 React JS</h5>
              <p>Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345">
            <div>
              <Image src="/images/node.svg" width={200} height={120} alt="Node.js" />
              <h5>CS2345 Node.js</h5>
              <p>Server-side JavaScript Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456">
            <div>
              <Image src="/images/next.svg" width={200} height={120} alt="Next.js" />
              <h5>CS3456 Next.js</h5>
              <p>React Framework & SSR</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567">
            <div>
              <Image src="/images/mongodb.svg" width={200} height={120} alt="MongoDB" />
              <h5>CS4567 MongoDB</h5>
              <p>NoSQL Database Systems</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678">
            <div>
              <Image src="/images/python.svg" width={200} height={120} alt="Python" />
              <h5>CS5678 Python</h5>
              <p>Data Science Foundations</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789">
            <div>
              <Image src="/images/java.svg" width={200} height={120} alt="Java" />
              <h5>CS6789 Java</h5>
              <p>OOP & Enterprise Apps</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890">
            <div>
              <Image src="/images/ml.svg" width={200} height={120} alt="Machine Learning" />
              <h5>CS7890 Machine Learning</h5>
              <p>Intro to ML</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
