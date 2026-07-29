# Aria Voss — Portfolio & Client Intake Site

A 4-page static site: home, about, proof-of-work (portfolio), and an apply form
that emails submissions to you via [Formspree](https://formspree.io).

## Files

```
index.html       Home / hero / services / testimonials
about.html        Your bio and process
portfolio.html    Proof-of-work case studies
apply.html        Client application form (Formspree)
css/style.css     All styling
js/main.js        Mobile nav + AJAX form submit
```

## 1. Personalize the content

Everything is plain HTML — open each file in a text editor and replace:

- "Aria Voss" with your real name (appears in `<title>`, nav brand, footer)
- The bio in `about.html`
- The case studies in `portfolio.html` with your real projects/results
- The stats and testimonials on `index.html`

## 2. Connect Formspree so applications land in your inbox

1. Go to https://formspree.io and create a free account.
2. Create a new form and verify the email address you want applications
   sent to.
3. Copy the form endpoint it gives you — it looks like
   `https://formspree.io/f/abcd1234`.
4. Open `apply.html`, find this line near the top of the `<form>` tag:

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

   and replace `YOUR_FORM_ID` with your real ID.

That's it — every submission on the Apply page will be emailed to you
directly, with all the client details (name, email, target role,
experience, timeline, budget, message).

The free Formspree tier includes 50 submissions/month, which is enough
for most solo practices to start.

## 3. Put it on GitHub and turn on GitHub Pages

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then on GitHub:

1. Go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL, typically:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

Changes you push to `main` go live automatically within a minute or two.

## 4. Optional: custom domain

In the same **Settings → Pages** panel you can add a custom domain (e.g.
`ariavoss.com`) — GitHub will show you the DNS records to add at your
domain registrar.

## Notes

- No build step, no dependencies to install — it's plain HTML/CSS/JS,
  so GitHub Pages can serve it as-is.
- Fonts load from Google Fonts via CDN; if you want it fully
  self-contained, download the font files and reference them locally.
- The apply form submits with JavaScript `fetch` so users see an inline
  "application received" confirmation instead of being redirected to
  Formspree's own page. If JavaScript fails for any reason, the form
  still works as a plain HTML POST to Formspree.
