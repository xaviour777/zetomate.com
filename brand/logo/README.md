# Zetomate brand: logo kit (Concept 2, the "to" wordmark)

The logo is the name itself. "to" is highlighted in orange, and an arrow runs under the word from start to finish, ending at a green coin: from idea to money in the bank.

Tagline: **From A to Z. You've got a mate.** Sub-line: **Idea to income.**

## Files
- `zetomate-logo.svg` / `zetomate-logo-white.svg`: main logo for the website header and footer (the white version goes on dark backgrounds)
- `zetomate-app-icon.svg`: app icon or social profile picture ("to" with the arrow and coin on an ink tile)
- `favicon.svg`: browser tab icon
- `png/`: PNG versions with transparent backgrounds, plus `favicon-32.png` and `apple-touch-icon.png`

## Colors
| Name  | Hex     | Use |
|-------|---------|-----|
| Mango | #FF6B1A | primary accent, CTAs, the "to" |
| Mint  | #19C98A | success, money, the coin |
| Ink   | #141A33 | text, dark backgrounds |

## Fonts (Google Fonts)
- Headings and logo: **Bricolage Grotesque** (800)
- Body text: **DM Sans** (400/500/700)

The SVGs use live text in Bricolage Grotesque, so load that font on the website. Use the PNGs anywhere the font can't be loaded. For the favicon, the PNG is the safer choice because browsers don't load web fonts inside favicon SVGs.

## Favicon HTML
```html
<link rel="icon" href="/brand/logo/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/logo/png/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/brand/logo/png/apple-touch-icon.png">
```
