# SARK International School & Hostel — Website source

This is a static, responsive HTML/CSS/JavaScript website intended for GitHub Pages. It uses authentic images extracted from the supplied 34-page school archive PDF. See `assets/` for the extracted/optimized files.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server. No build step or package installation is required.

## Publish on GitHub Pages
1. Upload the contents of this folder (including `assets/`) to the root of the repository.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose the main branch and `/ (root)`, then save.
4. Open the Pages URL after deployment and test on a phone and laptop.

## Included functionality
- Responsive layout with pen-inspired desktop navigation and expandable mobile navigation.
- Short randomized intro variations, Skip Intro, and replay; reduced-motion support.
- School sections, photo gallery lightbox with keyboard controls, scroll progress and back-to-top.
- Data-based school guide with suggested questions and a transparent fallback for unverified questions.
- Inquiry form that opens a prefilled email draft to `sarkinternationalschool686@gmail.com`; it does **not** send automatically.
- Review form that opens an email draft for moderation; reviews are not saved or published by this static website.
- Optional, consent-based, synthesized interface tones. No sound plays until enabled.

## Important limitations / items to configure before public release
1. **Exact blue-haired anime AI girl image is missing from the supplied PDF.** It was not invented or replaced. The intro selection falls back to a text/logo intro until the exact supplied image is added and integrated. The guide visual is a neutral “I” placeholder, not the requested character.
2. **No licensed music/audio files were included.** Music controls therefore explain that playback is unavailable. Add a properly licensed track and its attribution/license information before enabling playback.
3. **No backend or form provider is configured.** GitHub Pages cannot securely deliver forms by itself. Inquiry and review submissions open a `mailto:` draft only; the visitor must send it. For real delivery and moderation, configure a school-approved form provider/backend with server-side validation, spam protection, retention policy, and administrator access. Never place private keys in frontend code.
4. **Verify school details:** confirm official CBSE affiliation wording; confirm all facilities remain available; confirm winter closing time; confirm principal's official spelling (PDF data says “Dr. Harshvardhan Singh Rathore”, printed photo reference says “Dr. Harsha Vardhan Singh Rathor”).
5. **Verify achievements:** names, ranks, event names and dates in the source archive were marked uncertain. No unverified award is presented as confirmed in the copy. Have school staff verify source certificates/clippings and provide approved captions.
6. **Permissions:** obtain school/parent/guardian permissions as appropriate before publicly publishing student photos, certificates, names, or other personal information. The images in this archive were extracted from the supplied PDF; they have not been independently cleared for public use.
7. **Image review:** some PDF archive images are screenshots/collages and may include source-app UI or small text. Replace with original full-resolution photo files from school management where available. All images used here are authentic archive extracts, not generated school/campus imagery.
8. **No reviews/testimonials or review counts are fabricated.**
9. **Email and address** are copied from the project archive. Confirm they are still current before publishing.

## File structure
- `index.html` — page structure and copy
- `styles.css` — responsive styling, intro animations, accessibility and layout
- `script.js` — navigation, animations, lightbox, forms, optional tones and verified-data guide
- `assets/` — school logo and authentic image extracts

## Privacy/security note
This static site does not store submitted form contents, ratings, or personal data. Email drafts are opened locally in the visitor's mail app. Do not claim encrypted server storage, backend delivery, moderation workflow automation, or an advanced AI service unless those systems are implemented and tested.
