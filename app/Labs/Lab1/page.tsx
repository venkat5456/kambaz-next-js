export default function Lab1() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Lab 1 – HTML Examples</h2>

      {/* Headings */}
      <div id="headings">
        <h3>Heading Tags</h3>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      {/* Paragraphs */}
      <div id="paragraphs">
        <h3>Paragraphs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum. Praesent mauris.
        </p>
      </div>

      {/* Anchors */}
      <div id="anchors">
        <h3>Anchor Tags</h3>
        <a href="https://www.lipsum.com/" target="_blank">Lorem Ipsum</a><br />
        <a href="https://github.com/venkat5456/kambaz-next-js" target="_blank">
          GitHub Repository
        </a>
      </div>

      {/* Lists */}
      <div id="lists">
        <h3>Lists</h3>
        <h4>Ordered List</h4>
        <ol>
          <li>Step 1: Mix ingredients</li>
          <li>Step 2: Pour batter</li>
          <li>Step 3: Flip pancake</li>
        </ol>
        <h4>Unordered List</h4>
        <ul>
          <li>The Great Gatsby</li>
          <li>To Kill a Mockingbird</li>
          <li>1984</li>
        </ul>
      </div>

      {/* Tables */}
      <div id="tables">
        <h3>Tables</h3>
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
            <tr><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
            <tr><td>Q3</td><td>Bootstrap</td><td>2/17/21</td><td>92</td></tr>
            <tr><td>Q4</td><td>JavaScript</td><td>2/24/21</td><td>88</td></tr>
            <tr><td>Q5</td><td>React</td><td>3/3/21</td><td>95</td></tr>
            <tr><td>Q6</td><td>Node.js</td><td>3/10/21</td><td>91</td></tr>
            <tr><td>Q7</td><td>Express</td><td>3/17/21</td><td>89</td></tr>
            <tr><td>Q8</td><td>MongoDB</td><td>3/24/21</td><td>93</td></tr>
            <tr><td>Q9</td><td>Next.js</td><td>3/31/21</td><td>97</td></tr>
            <tr><td>Q10</td><td>Deployment</td><td>4/7/21</td><td>96</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>91.6</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Images */}
      <div id="images">
        <h3>Images</h3>
        <p>Remote image:</p>
        <img src="https://via.placeholder.com/150" alt="Placeholder" /><br /><br />
        <p>Local image:</p>
        <img src="/images/teslabot.jpg" alt="Tesla Bot" width={150} />
      </div>

      {/* Forms */}
      <div id="forms">
        <h3>Forms</h3>
        <form>
          <label>Username: </label>
          <input placeholder="jdoe" /><br /><br />

          <label>Password: </label>
          <input type="password" /><br /><br />

          <label>First Name: </label>
          <input /><br /><br />

          <label>Last Name: </label>
          <input /><br /><br />

          <label>Biography: </label><br />
          <textarea rows={3}></textarea><br /><br />

          <label>Favorite Movie Genre:</label><br />
          <input type="radio" name="genre" /> Action<br />
          <input type="radio" name="genre" /> Comedy<br />
          <input type="radio" name="genre" /> Drama<br /><br />

          <label>Hobbies:</label><br />
          <input type="checkbox" /> Reading<br />
          <input type="checkbox" /> Coding<br />
          <input type="checkbox" /> Music<br /><br />

          <label>Email: </label>
          <input type="email" /><br /><br />

          <label>Favorite Number: </label>
          <input type="number" /><br /><br />

          <label>Range: </label>
          <input type="range" /><br /><br />

          <label>Date of Birth: </label>
          <input type="date" /><br /><br />

          <label>Choose a City: </label>
          <select>
            <option>Boston</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select><br /><br />

          <button type="button" onClick={() => alert("Hello World!")}>
            Hello World!
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
