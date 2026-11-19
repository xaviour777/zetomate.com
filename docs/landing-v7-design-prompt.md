# ZetoMate V7 landing page: design prompt

Paste everything between the lines into Claude (Claude Design, claude.ai, or Claude Code) to generate or iterate on the V7 landing page UI. Paste the full V7 copy where it says `[PASTE V7 COPY HERE]`.

---

You are designing the homepage for **ZetoMate**, a creator-education platform from Zahid Iqbal, the creator behind the AI film **MYTHRA: The Mother's Monster** (100M+ official views). The audience is mostly young, mobile-first creators in South Asia and worldwide: students, editors, aspiring filmmakers, teachers and small businesses. Many are on mid-range Android phones.

**Goal of the page:** get visitors to start the free 7-day creator mission. Everything else supports that one action.

## Feeling

"Cinematic warmth." The page opens like a film premiere (dark, epic, MYTHRA's world) and then the "dawn breaks" into warm, light, welcoming sections where everyone feels they belong. It should feel exciting, charming and human. Avoid cold tech, robot or AI-brain imagery, stock-photo clichés and glassmorphism.

## Design system

- **Colours**
  - Night (hero, proof, manifesto, final CTA): `#0B0F1E`, with `#121729` and `#1A2036` for raised surfaces. Text `#F6F1EA`, with `#B9B4C7` for softer text.
  - Warm (most sections): cream `#FFF8EE`, peach `#FCEFDD`, sand `#F2E2C9`. Ink `#1C1A26`, with `#4F4A5C` for softer text.
  - **Ember** `#FF6B1A` (hover `#FF8A3D`, deep `#E0520A`). Use it only for the primary button, key highlight words and the spark motif. Gold `#FFB547` for stats on dark.
  - **Mint** `#19C98A` (soft `#DDF6EC`, deep `#0E8A5F`) for community and network sections and "Coming soon" badges. These are the existing ZetoMate logo colours: an orange dot and a mint dot around a white Z.
- **Type**
  - Headlines: **Anton**, uppercase, tight leading (0.98), like a movie poster. Hero size is `clamp(40px, 7vw, 100px)`, section H2 is `clamp(40px, 6.4vw, 84px)`. The second line of most headlines is in ember.
  - Body: **Nunito** (rounded, friendly), 18px with 1.6 line height. Use weight 800 for emphasis lines.
  - Eyebrows: Nunito 800, 13px, letter-spaced uppercase, in ember, with a small 4-point spark icon and a section number.
- **Shape:** cards with a 24px radius, soft warm shadows (`0 20px 50px -30px rgba(80,40,10,.35)`) and pill buttons. Generous spacing: sections are 80 to 140px tall in padding.
- **Buttons:** one primary style only, an ember gradient pill with white text and an arrow that nudges right on hover. Secondary buttons are ghost or outline. Never put two ember buttons side by side.
- **Motif:** a small 4-point spark or ember. Floating ember particles in the hero and the final CTA, and the spark on eyebrows.

## Structure (in this order)

Use the V7 copy word for word, with these structural changes:

1. **Sticky nav:** logo, links (The Method · How It Works · Creator Network · Our Story · For Partners) and the CTA "Start your journey" (shortened to "Start free" on phones).
2. **Hero (dark):** a muted, looping, autoplaying 10 to 15 second MYTHRA clip as a full-bleed background behind the headline, with a dark gradient overlay and film grain. If there is no video, use an animated ember glow with rising particles. Above the fold on a phone, show only the eyebrow, the 3-line headline, the one-line sub, the primary CTA and the microcopy "Free 7-day mission. Email only. Takes 2 minutes."
3. **Proof strip:** 4 stats with numbers that tick up (100M+ views · 3 Gold & 6 Silver · 45+ media outlets · Drama Method™).
4. **"Meet ZetoMate"** paragraph block (rest of the hero copy, still dark).
5. **02 Interrupt (dark):** the "unfinished" list as dashed cards ending in an ember "…".
6. **Dawn transition:** a gradient band from night to sunset orange to cream.
7. **03 Mission (warm):** "faces" chips (A student with a phone…) and a goal meter card ("1,000,000 creators" ticking up) with the CTA.
8. **04 Drama Method as a storyboard:** 4 film-frame cards (sprocket holes, scene numbers, an abstract "shot" for Hook/Stakes/Twist/Loop) that reveal one after another with a slight rotation. They scroll horizontally on mobile.
9. **Your First 7 Days (moved up from 08):** a vertical day timeline (Day 1 to 7 pills, with Day 7 in ember) plus the CTA, followed by a small **Free vs May cost extra** strip.
10. **05 Creator System:** a 6-card grid (Create, Publish, Collaborate, Grow, Earn, Repeat) with big faded numbers.
11. **06 Network (mint world):** the "You + Someone else" pairs joined by mint "+" circles. Mark it "Coming soon" with a waitlist button.
12. **07 Proof (dark, film):** a MYTHRA poster card (sticky on desktop), the story copy, "Watch the film", and award and creator-experience cards.
13. **Creator stories:** 3 testimonial cards (photo, name, one-line result, quote). Until real ones exist, show honest dashed "Your story could be here" cards. Never invent testimonials.
14. **09 Choose Your World:** a 6-tile picker (icon + "I want to…") with one detail panel. Live paths get the ember button; unbuilt paths show "Coming soon · Join the waitlist".
15. **10 + 11 Partners (compact):** partner copy with a tick list, then a 3-card strip for Schools, Brands and Communities.
16. **12 Human:** a portrait slot for a real photo of Zahid creating (not a headshot), beside his story.
17. **13 Manifesto (dark):** a "Where a student can…" list with hairline dividers.
18. **FAQ:** Do I need a powerful PC? Do I need AI experience? Is it in Urdu/Hindi? How is it different from YouTube tutorials? What's free vs paid? Will it go viral?
19. **Waitlist card** for Coming-soon features (email + optional marketing consent).
20. **14 Final invitation (dark, embers):** a centred poster headline, the list and the big CTA.
21. **Footer:** 4 link columns. On phones, add a sticky bottom CTA that appears only after the hero button scrolls out of view.

## CTA rules

- One primary action everywhere: **"Start your free creator mission"** linking to `/start`. Keep the V7 labels only for secondary links.
- Mark anything that isn't live yet "Coming soon" (Creator Network, partner pages, roadmap builder, schools, studio) and send it to the waitlist. Don't promise features that don't exist.

## Motion

- Gentle scroll reveals (fade + rise 28px, 0.8s, staggered 90ms).
- Stats tick up when they come into view.
- Storyboard frames straighten from a slight tilt as they appear.
- Ember particles drift upward in the hero and the final section.
- Respect `prefers-reduced-motion`: no animation, and everything stays visible.

## Constraints

- Mobile-first, from 360px up. No horizontal scroll. Tap targets of at least 44px.
- WCAG AA contrast, with a visible focus ring (gold, 3px).
- Fast on 4G: system-friendly fonts via `font-display: swap`, no heavy libraries, and video loaded with `preload="metadata"`.
- Keep the honesty disclaimers from the copy (small, 14px, lower opacity).

## Copy

[PASTE V7 COPY HERE]

---

## Notes for the team

- A working build of this design lives at `/v7` in this repo (`app/v7/page.js`, `app/v7/v7.css`). Use it as the reference implementation when iterating.
- To add the MYTHRA video, put the mp4 in `public/media/` and set `MYTHRA_LOOP` at the top of `app/v7/page.js`. Real testimonials go in `STORIES` in the same file.
