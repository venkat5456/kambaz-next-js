export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4: Forms</h2>

      {/* Username */}
      <section id="wd-forms-username">
        <h4>Lab - Forms - Username</h4>
        <label htmlFor="wd-username">Username</label><br />
        <input id="wd-username" name="username" type="text" placeholder="jdoe" />
      </section>
      <hr />

      {/* Password */}
      <section id="wd-forms-password">
        <h4>Lab - Forms - Password</h4>
        <label htmlFor="wd-password">Password</label><br />
        <input id="wd-password" name="password" type="password" placeholder="••••••••" />
      </section>
      <hr />

      {/* First & Last name */}
      <section id="wd-forms-names">
        <h4>Lab - Forms - First Name</h4>
        <label htmlFor="wd-first-name">First name</label><br />
        <input id="wd-first-name" name="firstName" type="text" placeholder="Jane" /><br /><br />

        <h4>Lab - Forms - Last name</h4>
        <label htmlFor="wd-last-name">Last name</label><br />
        <input id="wd-last-name" name="lastName" type="text" placeholder="Doe" />
      </section>
      <hr />

      {/* Textarea */}
      <section id="wd-forms-textareas">
        <h4>Lab - Forms - Textareas</h4>
        <label htmlFor="wd-textarea">About you</label><br />
        <textarea id="wd-textarea" name="about" rows={4} cols={40} placeholder="Write something here..." />
      </section>
      <hr />

      {/* Radio buttons */}
      <section id="wd-forms-radios">
        <h4>Lab - Forms - Comedy radio</h4>
        <label><input id="wd-radio-comedy"  type="radio" name="genre" value="comedy" /> Comedy</label><br />

        <h4>Lab - Forms - Drama radio</h4>
        <label><input id="wd-radio-drama"   type="radio" name="genre" value="drama" /> Drama</label><br />

        <h4>Lab - Forms - SciFi radio</h4>
        <label><input id="wd-radio-scifi"   type="radio" name="genre" value="scifi" /> SciFi</label><br />

        <h4>Lab - Forms - Fantasy radio</h4>
        <label><input id="wd-radio-fantasy" type="radio" name="genre" value="fantasy" /> Fantasy</label>
      </section>
      <hr />

      {/* Checkboxes */}
      <section id="wd-forms-checkboxes">
        <h4>Lab - Forms - Comedy checkbox</h4>
        <label><input id="wd-checkbox-comedy" type="checkbox" name="likes" value="comedy" /> Comedy</label><br />

        <h4>Lab - Forms - Drama checkbox</h4>
        <label><input id="wd-checkbox-drama"  type="checkbox" name="likes" value="drama" /> Drama</label>
      </section>
      <hr />

      {/* Selects */}
      <section id="wd-forms-selects">
        <h4>Lab - Forms - Select one option dropdown</h4>
        <label htmlFor="wd-select-one-genre">Favorite genre</label><br />
        <select id="wd-select-one-genre" name="favoriteGenre" defaultValue="">
          <option value="" disabled>Select one…</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="scifi">SciFi</option>
          <option value="fantasy">Fantasy</option>
        </select>

        <br /><br />
        <h4>Lab - Forms - Select many options</h4>
        <label htmlFor="wd-select-many-genres">Genres you watch</label><br />
        <select id="wd-select-many-genres" name="genres" multiple size={4}>
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
        <label htmlFor="wd-email">Email</label><br />
        <input id="wd-email" name="email" type="email" placeholder="jane@doe.com" /><br /><br />

        <h4>Lab - Forms - Salary</h4>
        <label htmlFor="wd-salary">Salary</label><br />
        <input id="wd-salary" name="salary" type="number" placeholder="75000" />
      </section>
      <hr />

      {/* Rating & DOB */}
      <section id="wd-forms-rating-dob">
        <h4>Lab - Forms - Rating slider</h4>
        <label htmlFor="wd-rating">Rating (0–10)</label><br />
        <input id="wd-rating" name="rating" type="range" min={0} max={10} defaultValue={5} /><br /><br />

        <h4>Lab - Forms - DOB date picker</h4>
        <label htmlFor="wd-dob">Date of Birth</label><br />
        <input id="wd-dob" name="dob" type="date" />
      </section>
      <hr />

      <button type="button">Submit</button>
    </div>
  );
}
