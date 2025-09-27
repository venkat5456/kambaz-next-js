"use client";

export default function Modules() {
  return (
    <div id="wd-modules">
      <h2>Course 1234</h2>
      <hr />

      {/* Top Buttons */}
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
        </select>
        <button>+ Module</button>
      </div>

      {/* Module 1 */}
      <ul>
        <li>
          Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          <ul>
            <li>
              LEARNING OBJECTIVES
              <ul>
                <li>Introduction to the course</li>
                <li>Learn what is Web Development</li>
              </ul>
            </li>
            <li>
              READING
              <ul>
                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                <li>Full Stack Developer - Chapter 2 - Creating Us</li>
              </ul>
            </li>
            <li>
              SLIDES
              <ul>
                <li>Introduction to Web Development</li>
                <li>Creating an HTTP server with Node.js</li>
                <li>Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          Week 1, Lecture 2 - Formatting User Interfaces with HTML
          <ul>
            <li>
              LEARNING OBJECTIVES
              <ul>
                <li>Learn how to create user interfaces with HTML</li>
                <li>Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li>
              SLIDES
              <ul>
                <li>Introduction to HTML and the DOM</li>
                <li>Formatting Web content with Headings and Paragraphs</li>
                <li>Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

