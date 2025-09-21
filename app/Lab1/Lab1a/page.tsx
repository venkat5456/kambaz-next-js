export default function Lab1a() {
  return (
    <div id="wd-lab1a" style={{ padding: "1rem" }}>
      <h2>Lab 1A – Environment + HTML</h2>

      {/* Headings & Paragraphs */}
      <div id="wd-headings">
        <h3>Heading Tags</h3>
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
        <h3>This is Heading 3</h3>
        <h6>This is Heading 6</h6>
        <p>This is a sample paragraph demonstrating HTML paragraphs.</p>
      </div>

      {/* Anchors */}
      <div id="wd-anchors">
        <h3>Anchor Tags</h3>
        <a href="https://www.google.com" target="_blank">Google</a><br />
        <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a><br />
        <a href="mailto:someone@example.com">Email Me</a><br />
        <a href="tel:+1234567890">Phone Link</a>
      </div>

      {/* Lists */}
      <div id="wd-lists">
        <h3>Lists</h3>
        <h4>Unordered List</h4>
        <ul>
          <li>Learn HTML</li>
          <li>Learn CSS</li>
          <li>Learn JavaScript</li>
        </ul>
        <h4>Ordered List</h4>
        <ol>
          <li>Setup Environment</li>
          <li>Write HTML</li>
          <li>Run in Browser</li>
        </ol>
      </div>

      {/* Tables */}
      <div id="wd-tables">
        <h3>Table Example</h3>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Forms */}
      <div id="wd-forms">
        <h3>Forms</h3>
        <form>
          <label htmlFor="username">Username: </label>
          <input id="username" placeholder="jdoe" /><br /><br />

          <label htmlFor="password">Password: </label>
          <input id="password" type="password" /><br /><br />

          <label>Favorite Topics:</label><br />
          <input type="checkbox" id="html" /> HTML <br />
          <input type="checkbox" id="css" /> CSS <br />
          <input type="checkbox" id="js" /> JavaScript <br /><br />

          <label>Gender:</label><br />
          <input type="radio" name="gender" value="male" /> Male <br />
          <input type="radio" name="gender" value="female" /> Female <br /><br />

          <label htmlFor="city">Select City: </label>
          <select id="city">
            <option>Boston</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
