import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1><hr/>
      <h2>Published Courses (7)</h2><hr/>
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link href="/Courses/1234">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="React"/>
            <div>
              <h5>CS1234 React JS</h5>
              <p>Full Stack Software Developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345">
            <Image src="/images/node.jpg" width={200} height={150} alt="Node"/>
            <div>
              <h5>CS2345 Node.js</h5>
              <p>Server-side JavaScript Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456">
            <Image src="/images/nextjs.jpg" width={200} height={150} alt="Next.js"/>
            <div>
              <h5>CS3456 Next.js</h5>
              <p>React Framework & SSR</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567">
            <Image src="/images/mongodb.jpg" width={200} height={150} alt="MongoDB"/>
            <div>
              <h5>CS4567 MongoDB</h5>
              <p>NoSQL Database Systems</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python"/>
            <div>
              <h5>CS5678 Python</h5>
              <p>Data Science Foundations</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789">
            <Image src="/images/java.jpg" width={200} height={150} alt="Java"/>
            <div>
              <h5>CS6789 Java</h5>
              <p>OOP & Enterprise Apps</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890">
            <Image src="/images/ml.jpg" width={200} height={150} alt="Machine Learning"/>
            <div>
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


