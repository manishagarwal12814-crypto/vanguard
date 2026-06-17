# Vanguard Defence Academy — Demo Landing Page

A full-stack demo landing page for a fictional NDA/CDS/AFCAT/SSB coaching
institute. Built for portfolio/demo purposes — all names, stats, and
testimonials are placeholder content.

## Stack

- **Frontend:** Plain HTML, CSS and JavaScript (no framework, no build step)
- **Backend:** Node.js + Express — serves the frontend and exposes one API
  route for the enrollment form
- **Storage:** No database. Form submissions are appended to
  `data/registrations.json` and logged to the console.

## Running it locally

```bash
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

Submitting the "Begin Your Application" form sends a POST request to
`/api/register`, which logs the entry to your terminal and saves it into
`data/registrations.json` (this file is created automatically — it doesn't
exist until the first submission).

## Project structure

```
vanguard-academy/
├── server.js              # Express server + /api/register endpoint
├── package.json
├── data/                  # registrations.json is written here at runtime
└── public/
    ├── index.html          # Page structure
    ├── css/style.css       # Design system + all styling
    └── js/main.js          # Content data + interactions (see below)
```

## Customizing the content

Almost all of the page copy lives in **`public/js/main.js`** as plain
JavaScript arrays — edit these instead of touching the HTML:

- `PROGRAMS` — the 6 program cards (NDA, CDS, AFCAT, etc.)
- `FEATURES` — the "Why Vanguard" feature grid
- `TESTIMONIALS` — the success wall cards
- `FAQS` — the accordion questions/answers
- `TICKER_ITEMS` — the scrolling "live feed" strip

Brand name, colors, and fonts live at the top of **`public/css/style.css`**
in the `:root` block if you want to re-skin it for a different niche or
brand.

## Notes for going further

- Swap the JSON file for a real database (MongoDB, Postgres, etc.) by
  replacing the `readRegistrations` / `writeRegistrations` functions in
  `server.js` — the route logic itself won't need to change.
- The contact form currently requires Full Name, Phone, Email, City and
  Program. Add/remove `required` attributes in `index.html` and update the
  destructuring in `server.js`'s `/api/register` handler to match.
- All animations respect `prefers-reduced-motion`.
