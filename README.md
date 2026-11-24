# Carbon Docs

Visual study notes by Saurabh Baviskar, one book per subject.

The first book is **System Design**: 4 volumes (fundamentals, deeper topics, high-level and low-level case studies) and 162 topics. Each finished topic gets a page with step-by-step isometric animations, key points, Python code and interview questions.

It is a plain static site with no build step:

- `index.html`: the app (book switcher, topic tree, page view)
- `assets/`: shared styles (`app.css`, `lesson.css`) and the animation engine (`lesson.js`)
- `system-design/book.js`: the book's volumes, topics, and which topics have a page
- `system-design/pages/`: one HTML file per finished topic

Open `index.html` in a browser, or deploy the folder as-is (for example on Vercel).
