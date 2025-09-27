"use client";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Labs</h1>
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* Headings */}
      <div id="wd-headings">
        <h4>Heading Tags</h4>
        <p>
          Text documents are often broken up into several sections and
          subsections. Each section is usually prefaced with a short title
          or heading that attempts to summarize the topic of the section
          it precedes. The font of the section headings are usually larger
          and bolder than the plain text. There are 6 heading tags for
          different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the
          largest heading and h6 is the smallest heading.
        </p>
      </div>

      {/* Paragraphs */}
      <div id="wd-paragraph">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default browsers
          render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph tag
          to tell browsers to render the gaps.
        </p>
      </div>

      {/* Lists */}
      <div id="wd-lists">
        <h4>List Tags</h4>

        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients</li>
          <li>Add wet ingredients</li>
          <li>Stir to combine</li>
          <li>Heat skillet</li>
          <li>Pour batter</li>
          <li>Cook until bubbly</li>
          <li>Flip and cook other side</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>My favorite recipe: Masala Chai</h5>
        <ol id="wd-your-favorite-recipe">
          <li>Boil 1 cup of water</li>
          <li>Add tea leaves and let it simmer</li>
          <li>Add ginger, cardamom, and cinnamon</li>
          <li>Pour in 1/2 cup milk</li>
          <li>Add sugar to taste</li>
          <li>Strain into a cup and serve hot</li>
        </ol>

        <h5>My Favorite Books</h5>
        <ul id="wd-books">
          <li>Atomic Habits – James Clear</li>
          <li>The Alchemist – Paulo Coelho</li>
          <li>Rich Dad Poor Dad – Robert Kiyosaki</li>
          <li>Harry Potter and the Sorcerer’s Stone – J.K. Rowling</li>
          <li>Wings of Fire – A.P.J. Abdul Kalam</li>
        </ul>
      </div>

      {/* Table */}
      <div id="wd-tables">
        <h4>Table Tag</h4>
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

      {/* Images */}
      <div id="wd-images">
        <h4>Image Tag</h4>
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
      </div>

      {/* Forms */}
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-username">Username:</label>
          <input id="wd-username" placeholder="jdoe" /> <br />

          <label htmlFor="wd-password">Password:</label>
          <input id="wd-password" type="password" defaultValue="123@#$asd" />
          <br />

          <label htmlFor="wd-firstname">First name:</label>
          <input id="wd-firstname" type="text" title="John" /> <br />

          <label htmlFor="wd-lastname">Last name:</label>
          <input
            id="wd-lastname"
            type="text"
            placeholder="Doe"
            defaultValue="Wonderland"
            title="Last name"
          />{" "}
          <br />

          {/* Textarea */}
          <h5>Text Box</h5>
          <label htmlFor="wd-textarea">Biography:</label>
          <br />
          <textarea id="wd-textarea" cols={30} rows={5}>
            Lorem ipsum dolor sit amet...
          </textarea>
          <br />

          {/* Buttons */}
          <h5>Buttons</h5>
          <button
            type="button"
            id="wd-all-good"
            onClick={() => alert("Life is Good!")}
          >
            Hello World!
          </button>
          <br />

          {/* Radio */}
          <h5>Radio Buttons</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>
          <br />

          {/* Checkboxes */}
          <h5>Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="checkbox" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label>
          <br />
          <input type="checkbox" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label>
          <br />
          <input type="checkbox" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
          <br />
          <input type="checkbox" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          <br />

          {/* Dropdown */}
          <h5>Dropdowns</h5>
          <label htmlFor="wd-select-one-genre">Favorite movie genre:</label>
          <br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <br />

          <label htmlFor="wd-select-many-genre">Favorite movie genres:</label>
          <br />
          <select multiple id="wd-select-many-genre">
            <option value="COMEDY" selected>
              Comedy
            </option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </form>
      </div>

      {/* ✅ Other HTML field types */}
      <div id="wd-other-fields">
        <h4>Other HTML field types</h4>

        <label htmlFor="wd-text-fields-email"> Email: </label>
        <input
          type="email"
          placeholder="jdoe@somewhere.com"
          id="wd-text-fields-email"
        />
        <br />

        <label htmlFor="wd-text-fields-salary-start"> Starting salary: </label>
        <input
          type="number"
          defaultValue="100000"
          placeholder="1000"
          id="wd-text-fields-salary-start"
        />
        <br />

        <label htmlFor="wd-text-fields-rating"> Rating: </label>
        <input
          type="range"
          defaultValue="4"
          max="5"
          id="wd-text-fields-rating"
        />
        <br />

        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input
          type="date"
          defaultValue="2000-01-21"
          id="wd-text-fields-dob"
        />
        <br />
      </div>

      {/* Anchor */}
      <div id="wd-links">
        <h4>Anchor Tag</h4>
        <p>
          Please{" "}
          <a href="https://www.lipsum.com" id="wd-lipsum">
            click here
          </a>{" "}
          for dummy text.
        </p>
        <p>
          Visit my{" "}
          <a href="https://github.com/venkat5456" id="wd-github">
            GitHub repo
          </a>
        </p>
      </div>
    </div>
  );
}
