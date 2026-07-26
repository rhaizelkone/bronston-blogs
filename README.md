# raecantwrite · two-corner site

A landing page plus two themed wings that share one craft but wear
different colors. The tabs at the very top of every page switch wings.

## Structure

```
index.html                        Landing page — pick a corner
│
├── reading-room/               📚 earthen pastels · raecantwrite
│   ├── index.html                  Home (hero + latest posts)
│   ├── reviews.html                Review archive
│   ├── review-template.html        Review template (spine ratings etc.)
│   ├── is-reading-a-dying-art.html First post (interactive)
│   └── about.html                  About Rae
│
├── bronston/                     🍁 pastel orange + navy · Bronston corner
│   ├── index.html                  Home (hero + latest posts)
│   ├── posts.html                  Bronston post archive
│   └── post-template.html          Bronston post template
│
├── css/theme.css                 Reading-corner aesthetic
├── css/bronston.css              Bronston aesthetic
└── js/polls.js                   Interactive polls (shared)
```

Each wing has its own header, footer, and socials:
- Reading corner footer → your Goodreads, Instagram, TikTok
- Bronston footer → Instagram @bronston.ca and the Bronston Facebook page

## Launch (free, ~10 min)

Drag the whole folder onto https://app.netlify.com/drop (or use
Vercel / Cloudflare Pages / GitHub Pages). Done.

## Adding posts

**Reading corner:** duplicate `review-template.html` (reviews) or
`is-reading-a-dying-art.html` (discussion posts), edit, then add a card
on `reading-room/index.html` and `reviews.html`.

**Bronston:** duplicate `bronston/post-template.html`, edit the
[bracketed] placeholders, then add a card on `bronston/index.html`
and `bronston/posts.html` (copy an existing card block).

## Changing colors

Each wing's palette lives at the top of its CSS file as variables —
edit once, the whole wing updates. The two files never affect each
other, so the corners can evolve independently.
