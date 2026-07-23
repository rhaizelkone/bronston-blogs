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

## Shared headers & footers (Jekyll)

The site now uses GitHub Pages' built-in Jekyll engine. Headers,
footers, and subscribe cards live in ONE place per wing:

```
_includes/reading/header.html      _includes/bronston/header.html
_includes/reading/footer.html      _includes/bronston/footer.html
_includes/reading/subscribe.html   _includes/bronston/subscribe.html
```

Edit an include → every page of that wing updates on the next commit.
Pages reference them with lines like `{% include reading/header.html %}`
— don't remove those lines, and keep the two `---` lines at the very
top of each page (Jekyll needs them). The templates already contain
everything, so the posting routine is unchanged.

NOTE: nothing renders if you open the HTML files directly on your
computer anymore — the includes are assembled by GitHub when you push.
Preview by committing; it's live in a minute anyway.

## Setting up the email lists (one-time)

The Subscribe buttons currently point at placeholder links. To make
them real:

1. Create a free account at an email service — MailerLite is a good
   fit (free up to 1,000 subscribers), Buttondown or Mailchimp also work
2. Create TWO groups/lists: "Reading Room" and "Bronston Buzz"
3. Create a signup form for each group and copy each form's hosted
   page URL
4. Replace the placeholders — each appears in exactly two files:
   - `https://REPLACE-WITH-READING-ROOM-SIGNUP-LINK` in
     `_includes/reading/footer.html` and `_includes/reading/subscribe.html`
   - `https://REPLACE-WITH-BRONSTON-SIGNUP-LINK` in
     `_includes/bronston/footer.html` and `_includes/bronston/subscribe.html`
5. Commit — every subscribe button on the site now works

## Notifying subscribers about a new post

After publishing a post, send a short campaign/broadcast to that
wing's group from your email service: post title, one-line teaser,
link. Takes two minutes. (Most services can automate this from an
RSS feed later — ask Claude to add a feed when you want that.)

## Comments (Disqus)

Every post carries a comment section via the includes
`_includes/reading/comments.html` and `_includes/bronston/comments.html`
(shortname: bronstonblogs). New posts made from the templates get
comments automatically.

- Reply to readers directly in the comment box on the post while
  signed in to your Disqus account — your reply nests in the thread
- Moderate (approve, delete, close threads, ban spammers) at
  disqus.com → your site's Moderation dashboard
- Email notifications for new comments can be enabled in Disqus
  settings → Notifications

## RSS feeds

Two feeds live at the site root: `feed-reading.xml` (Reading Room)
and `feed-bronston.xml` (Bronston Buzz).

- ONE-TIME: replace every `https://YOUR-SITE-URL` in both files with
  your real site URL (find-and-replace in the GitHub editor)
- PER POST: when publishing, copy an existing `<item>` block in the
  wing's feed, paste it at the TOP of the items, and update the
  title, link, guid, date, and description
- These feeds let readers follow via RSS apps now, and plug directly
  into RSS-to-email automation if you ever upgrade MailerLite

## Sending the new-post email (manual, ~2 min)

MailerLite → Campaigns → Create campaign → pick the wing's group →
paste the matching template (see EMAIL-TEMPLATES.md) → swap the
[bracketed] bits → send.
