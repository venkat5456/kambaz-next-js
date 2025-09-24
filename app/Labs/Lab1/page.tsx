export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

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
          <li>Enders Game</li>
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
    </div>
  );
}
