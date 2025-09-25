export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* anchor target for Back to Top */}
      <a id="top"></a>

      {/* Single Page Application navigation (in-page anchors) */}
      <nav
        id="wd-spa-nav"
        style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "8px 0 12px" }}
      >
        <a href="#wd-headings">Headings</a>
        <a href="#wd-paragraph">Paragraph</a>
        <a href="#wd-ol">Ordered List</a>
        <a href="#wd-ul">Unordered List</a>
        <a href="#wd-forms">Forms</a>
        <a href="#wd-anchor">Anchor Tag</a>
      </nav>
      <hr />

      {/* Headings */}
      <div id="wd-headings">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      {/* Paragraph */}
      <div id="wd-paragraph">
        <h4>Paragraph Example</h4>
        <p>
          This is a sample paragraph written for Lab 1. A paragraph groups together 
          sentences to form a block of text. You can use the &lt;p&gt; tag to add 
          descriptions, explanations, or any textual content in your web page.
        </p>
      </div>

      {/* Anchor Tag Section */}
      <section id="wd-anchor" style={{ margin: "12px 0" }}>
        <h4>Anchor Tag</h4>
        <p>
          External link:{" "}
          <a
            id="wd-anchor-external"
            href="https://www.northeastern.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northeastern University
          </a>
        </p>
        <p>
          In-page jump: Go to the{" "}
          <a href="#wd-ol">Ordered List</a> section, or{" "}
          <a href="#top">Back to top</a>.
        </p>
      </section>
      <hr />

      {/* Ordered List */}
      <div id="wd-ol">
        <h4>Ordered List</h4>
        <h5>Steps to make Pancakes</h5>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients</li>
          <li>Add wet ingredients</li>
          <li>Stir to combine</li>
          <li>Heat a skillet</li>
          <li>Pour batter</li>
          <li>Flip and cook</li>
          <li>Serve and enjoy</li>
        </ol>

        <h5>My Favorite Recipe: Making Masala Chai</h5>
        <ol id="wd-my-favorite-recipe">
          <li>Boil water and add tea leaves</li>
          <li>Add milk, sugar, and spices</li>
          <li>Simmer, strain, and serve hot</li>
        </ol>
      </div>

      {/* Unordered List */}
      <div id="wd-ul">
        <h4>Unordered List</h4>
        <h5>My Favorite Books</h5>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>

        <h5>My Favorite Movies</h5>
        <ul id="wd-my-movies">
          <li>Inception</li>
          <li>Interstellar</li>
          <li>The Matrix</li>
        </ul>
      </div>

      {/* Forms Section (moved from Lab4 → appended here) */}
      <div id="wd-forms">
        <h3>Lab 1: Forms</h3>

        {/* Username */}
        <section id="wd-forms-username">
          <h4>Lab - Forms - Username</h4>
          <input id="wd-username" type="text" placeholder="venkat5456" />
        </section>
        <hr />

        {/* Password */}
        <section id="wd-forms-password">
          <h4>Lab - Forms - Password</h4>
          <input id="wd-password" type="password" placeholder="••••••••" />
        </section>
        <hr />

        {/* First & Last Name */}
        <section id="wd-forms-names">
          <h4>Lab - Forms - First Name</h4>
          <input id="wd-first-name" type="text" placeholder="Manikanta" /><br /><br />
          <h4>Lab - Forms - Last Name</h4>
          <input id="wd-last-name" type="text" placeholder="Sai" />
        </section>
        <hr />

        {/* Textarea */}
        <section id="wd-forms-textareas">
          <h4>Lab - Forms - Textareas</h4>
          <textarea
            id="wd-textarea"
            rows={4}
            cols={40}
            placeholder="Write about your favorite course here..."
          />
        </section>
        <hr />

        {/* Radios */}
        <section id="wd-forms-radios">
          <h4>Lab - Forms - Radios</h4>
          <input id="wd-radio-comedy" type="radio" name="genre" value="comedy" /> Comedy<br />
          <input id="wd-radio-drama" type="radio" name="genre" value="drama" /> Drama<br />
          <input id="wd-radio-scifi" type="radio" name="genre" value="scifi" /> SciFi<br />
          <input id="wd-radio-fantasy" type="radio" name="genre" value="fantasy" /> Fantasy
        </section>
        <hr />

        {/* Checkboxes */}
        <section id="wd-forms-checkboxes">
          <h4>Lab - Forms - Checkboxes</h4>
          <input id="wd-checkbox-comedy" type="checkbox" value="comedy" /> Comedy<br />
          <input id="wd-checkbox-drama" type="checkbox" value="drama" /> Drama
        </section>
        <hr />

        {/* Selects */}
        <section id="wd-forms-selects">
          <h4>Lab - Forms - Select one option dropdown</h4>
          <select id="wd-select-one-genre" defaultValue="">
            <option value="" disabled>Select one…</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="scifi">SciFi</option>
            <option value="fantasy">Fantasy</option>
          </select><br /><br />

          <h4>Lab - Forms - Select many options</h4>
          <select id="wd-select-many-genres" multiple size={4}>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="scifi">SciFi</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </section>
        <hr />

        {/* Email & Salary */}
        <section id="wd-forms-email-salary">
          <h4>Lab - Forms - Email</h4>
          <input id="wd-email" type="email" placeholder="manikanta@example.com" /><br /><br />
          <h4>Lab - Forms - Salary</h4>
          <input id="wd-salary" type="number" placeholder="90000" />
        </section>
        <hr />

        {/* Rating & DOB */}
        <section id="wd-forms-rating-dob">
          <h4>Lab - Forms - Rating slider</h4>
          <input id="wd-rating" type="range" min={0} max={10} defaultValue={7} /><br /><br />
          <h4>Lab - Forms - DOB date picker</h4>
          <input id="wd-dob" type="date" />
        </section>
        <hr />

        <button type="button">Submit</button>
      </div>
    </div>
  );
}
