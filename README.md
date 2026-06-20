# Lindokuhle Ndlala — Personal Portfolio

A clean, multi-page personal portfolio website built with plain HTML, CSS, and JavaScript.
No frameworks needed — works perfectly with VS Code and deploys easily to GitHub Pages.

## 📁 File Structure

```
lindo-portfolio/
├── index.html          ← Home page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Typing animation, skill bars, form, scroll reveal
├── images/             ← Add your photo here (create this folder)
│   └── photo.jpg       ← Your profile photo
└── pages/
    ├── about.html      ← About Me page
    ├── skills.html     ← Technical Skills + Education
    ├── projects.html   ← Projects portfolio
    └── contact.html    ← CV Request form
```

---

## ✏️ Things to Customise

### 1. Your email address
Search for `lindokuhle.ndlala@email.com` in these files and replace with your real email:
- `js/main.js` (line with `mailto:`)
- `pages/contact.html`

### 2. Your profile photo
- Create an `images/` folder in the root
- Add your photo as `images/photo.jpg`
- In `pages/about.html`, comment out the placeholder `<div>` and uncomment the `<img>` tag

### 3. Your social links
In `pages/contact.html`, update:
- LinkedIn URL
- GitHub URL

### 4. Your projects
In `pages/projects.html`, replace the placeholder cards with your real projects.
Update the GitHub links and descriptions.

### 5. Your school info (if different)
In `pages/skills.html` under the Education section.

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Push to GitHub
1. Open VS Code and open the `lindo-portfolio` folder
2. Open the terminal: `Ctrl + `` ` ``
3. Run these commands:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

4. Go to [github.com](https://github.com) → New repository
5. Name it: `lindo-portfolio` (or `your-username.github.io` for a root URL)
6. Copy the remote URL from GitHub, then run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/lindo-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

Your site will be live at:
`https://YOUR-USERNAME.github.io/lindo-portfolio/`

(Takes about 1–2 minutes to go live after saving.)

### Step 3 — Add to your CV
Add this line to your CV:
```
Portfolio: https://YOUR-USERNAME.github.io/lindo-portfolio/
```

---

## 🔧 VS Code Tips

- Install the **Live Server** extension to preview locally (right-click `index.html` → Open with Live Server)
- Install **Prettier** for auto-formatting
- Use `Ctrl + Shift + P` → "Format Document" to format any file
