# Nexus — Landing Page

This is a HTML/CSS project done as part of the **Enugu Turing Tech Program**. The goal was to take a UI design mockup and build it out using HTML and Tailwind CSS as closely as possible.

---

## What I Built

A fully responsive landing page for a fictional digital agency called **Nexus**. It includes:

- Navigation bar with a working hamburger menu on mobile
- Hero section with a call-to-action
- Services section
- About section
- Contact form
- Footer

---

## Tools & Technologies

- HTML5
- Tailwind CSS (built locally with the Tailwind CLI)

---

## What I Learned

This project taught me a lot. A few things that stood out:

- How to use Tailwind's utility classes instead of writing custom CSS
- How `@layer base`, `@layer components` and `@layer utilities` work in `input.css`
- Making a layout actually look good on mobile (responsive design is harder than it looks!)

---

## How to Run It

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the CSS:
   ```bash
   npm run build
   ```
4. Open `index.html` in your browser

If you want live reloading while editing:
```bash
npm run dev
```

---

## Folder Structure

```
nexus-website/
├── index.html
├── package.json
├── tailwind.config.js
├── src/
│   └── input.css
├── dist/
│   └── output.css    ← generated, don't edit this directly
└── assets/
    └── images/
        ├── hero-image.png
        └── about-image.png
```

---

## Notes

The design mockup was provided as part of the assignment. I tried to match it as closely as I could while keeping the code clean. There are probably better ways to do some things, and I'm still learning, so feedback is welcome!

---

*Project submitted as part of the Enugu Turing Tech Program — Cohort 2026*
