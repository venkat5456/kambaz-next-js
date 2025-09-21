"use client";

export default function Lab1() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Lab 1A – Environment + HTML</h2>

      <h3>Heading Tags</h3>
      <h1>This is Heading 1</h1>
      <h2>This is Heading 2</h2>
      <h3>This is Heading 3</h3>
      <h6>This is Heading 6</h6>

      <p>This is a sample paragraph demonstrating HTML paragraphs.</p>

      <h3>Anchor Tags</h3>
      <a href="https://www.google.com">Google</a><br/>
      <a href="https://www.wikipedia.org">Wikipedia</a><br/>

      <h3>Lists</h3>
      <ul>
        <li>Learn HTML</li>
        <li>Learn CSS</li>
        <li>Learn JavaScript</li>
      </ul>

      <ol>
        <li>Setup Environment</li>
        <li>Write HTML</li>
        <li>Run in Browser</li>
      </ol>

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

      <h3>Forms</h3>
      <label>Username:</label>
      <input type="text" placeholder="jdoe" /><br/>
      <label>Password:</label>
      <input type="password" /><br/>

      <h4>Favorite Topics:</h4>
      <input type="checkbox" /> HTML
      <input type="checkbox" /> CSS
      <input type="checkbox" /> JavaScript<br/>

      <h4>Gender:</h4>
      <input type="radio" name="gender" /> Male
      <input type="radio" name="gender" /> Female<br/>

      <button type="button" onClick={() => alert("Form Submitted!")}>
        Submit
      </button>
    </div>
  );
}
