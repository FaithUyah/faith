# Faith Uyah Portfolio

A self-contained Faith Uyah portfolio built with the visual language and editorial structure of the DMI sample website at `https://dmi.com.ng/`, using the public services, biography, work, contact details, imagery, and YouTube videos from `https://faithuyah.github.io/portfolio/`.

## Run locally

```bash
npm start
```

Then open `http://localhost:3000`.

## Edit images and YouTube videos

Open `config.js` (served at `/config.js`). The `images` object controls the hero, founder, about collage, category cards, recent-work mosaic, and Faith portfolio image. Each value can be a local project path such as `assets/my-image.jpg` or a full HTTPS URL.

Add or replace entries in `youtubeVideos` with your own YouTube watch, `youtu.be`, Shorts, or embed links. The site converts supported YouTube URLs to playable embeds automatically.

The same file includes the portfolio-informed biography, email address, and WhatsApp number used by the partner section, Contact page, and floating WhatsApp button.

## Motion

The portfolio includes a lightweight WOW.js-style motion layer without a dependency: the hero animates in on load, sections reveal and stagger as they enter the viewport, the menu opens with a clipped transition, internal routes fade between pages, the scroll position drives a progress bar, and cards/buttons have hover transitions. Users who enable `prefers-reduced-motion` receive a static version automatically.
# -techie-clockit-
