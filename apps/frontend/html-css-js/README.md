# Phase 1 - Step 1: HTML, CSS, JS Exercises

## Task
Understand the fundamentals of HTML, CSS, and basic JavaScript DOM manipulation.

## Exercise 1 - Movie Poster
- Create a single `conjuring.html` file.
- Includes:
  - A heading (`<h1>`) for the movie title.
  - A paragraph (`<p>`) with a proper summary of the movie.
  - A movie poster image in `images/conjuring_poster.jpg`.
- Styled with **internal CSS** for a spooky dark theme.

## Logic
- `<h1>` for title, `<p>` for summary, `<img>` for poster.  
- Internal CSS: dark background, light text, red heading, styled image.  
- `alt` text added for accessibility

## Notes / Learning
- Added descriptive comments inside HTML.
- Created a dedicated `images/` folder for assets.
- Practiced internal CSS styling without external libraries.

## Exercise 2 - Meme Generator

* Create a single `meme-generator.html` file.
* Includes:

  * A heading (`<h1>`) for "Meme Generator".
  * A text input (`<input type="text">`) for typing meme text.
  * A meme image in `images/cheems_meme.jpeg`.
  * A `<div>` overlay to display the typed text on the image.

* Styled with **internal CSS**:

  * Centered vertical layout (title → input → image).
  * Overlay text constrained to image width and wrapped automatically.
  * Text shadow for readability.

## Logic

* `<h1>` for title, `<input>` for user text, `<img>` for meme, `<div>` for overlay.
* Internal CSS: center elements vertically, overlay text with absolute positioning, ensure text stays within image boundaries and wraps correctly.
* JavaScript listens for `input` events and updates overlay text in real-time.

## Notes / Learning

* Practiced vertical stacking and centering with flexbox.
* Learned dynamic text overlay on images using JavaScript.
* Ensured accessibility by keeping `alt` text for images.
* Added descriptive comments in HTML, CSS, and JS.

## Exercise 3 - Granny's Room Game

* Create a single `granny-game.html` file.

* Includes:

  * Background image of a spooky room (`images/spooky_room.jpeg`).
  * Key image (`images/key.jpeg`) that moves into the inventory when clicked.
  * Granny image (`images/granny.jpeg`) that shows a "Game Over" alert on click.
  * An inventory `<div>` to hold the key after it’s clicked.

* Styled with **internal CSS**:

  * Absolute positioning for key, Granny, and inventory.
  * Background covers the full viewport with proper centering.
  * Granny image sized appropriately to stand out.
  * Inventory div semi-transparent for visibility.

## Logic

* Clicking the key moves it into the inventory div using `appendChild()` and hides it from the original position.
* Clicking Granny triggers a **"Game Over"** alert using `addEventListener`.
* Elements initially positioned absolutely to match the background layout.
* JavaScript handles click events and updates DOM dynamically.

## Notes / Learning

* Practiced DOM manipulation and dynamic element movement.
* Used event listeners to handle interactive elements.
* Managed visual layout with CSS while updating elements programmatically.
* Maintained a clear folder structure with an `images/` folder for all assets.
* Added descriptive comments inside HTML, CSS, and JS for clarity.
