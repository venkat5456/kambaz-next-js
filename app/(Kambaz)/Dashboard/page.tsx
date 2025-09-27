import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="NodeJS" />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node.js
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt="Python" />
            <div>
              <h5>CS3456 Python Programming</h5>
              <p className="wd-dashboard-course-title">
                Introduction to Python
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt="Java" />
            <div>
              <h5>CS4567 Java Programming</h5>
              <p className="wd-dashboard-course-title">
                Object-Oriented Design with Java
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" width={200} height={150} alt="Machine Learning" />
            <div>
              <h5>CS5678 Machine Learning</h5>
              <p className="wd-dashboard-course-title">
                ML Algorithms and Applications
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/db.jpg" width={200} height={150} alt="Databases" />
            <div>
              <h5>CS6789 Databases</h5>
              <p className="wd-dashboard-course-title">
                SQL and NoSQL Database Systems
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/cybersecurity.jpg" width={200} height={150} alt="Cybersecurity" />
            <div>
              <h5>CS7890 Cybersecurity</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Cybersecurity
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


