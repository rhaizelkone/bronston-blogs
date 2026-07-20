# Publishing Cheat-Sheet · The Bronston Blogs

How to publish a new post using GitHub + Netlify. Total time: ~2 minutes.

## One-time setup (already done? skip this)

1. Create a repo on github.com (e.g. `bronston-blogs`)
2. Upload the CONTENTS of this site folder (index.html + the
   bronston / reading-corner / css / js folders)
3. In Netlify: Add new site → Import an existing project → GitHub →
   pick the repo → leave build settings empty → Deploy
4. Netlify now auto-publishes every time the repo changes

## Publishing a new post

### Step 1 — Create the post file
- In the repo, open the folder for the right wing:
  - Bronston post → `bronston/`
  - Book review → `reading-corner/`
- Open the template (`post-template.html` or `review-template.html`),
  click the copy icon to copy its code
- Click **Add file → Create new file**, name it in lowercase with
  dashes, e.g. `fall-fair-recap.html` or `review-book-title.html`
- Paste the template code and replace every [bracketed placeholder]
  with real content
- Click **Commit changes**

### Step 2 — Add its card to the wing's pages
- Edit the wing's `index.html` (pencil icon): copy an existing card
  block (`<a class="card" ...> ... </a>`), paste it as the FIRST card
  in the grid, and update the link, title, excerpt, and date
- Do the same on the archive page (`posts.html` or `reviews.html`)
- Commit changes

### Step 3 — There is no step 3
Netlify sees the commit and redeploys automatically. Check the
Deploys tab on Netlify if you want to watch it go live (~30 seconds).

## Poll numbers
Each poll stores its starting counts in `data-votes="12,8,5"` —
one number per option, in order. Set them to whatever feels right;
real per-visitor votes animate on top of these.

## Fixing mistakes
- GitHub keeps every version: open the file → History → view any old
  version and restore from it
- Netlify keeps every deploy: Deploys tab → click an older deploy →
  "Publish deploy" to roll the whole site back instantly

## Golden rules
- Never rename or move the `css/` and `js/` folders — every page
  points at them
- New pages must link the right stylesheet: `../css/bronston.css`
  for Bronston posts, `../css/theme.css` for Reading Room posts
  (the templates already do this)
- Keep filenames lowercase-with-dashes and never change a filename
  after sharing its link
