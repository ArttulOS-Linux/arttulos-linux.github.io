# ArttulOS Website

**⚠️ STATUS: PROJECT ALPHA // NOT DEPLOYMENT READY ⚠️**

Official website for ArttulOS // The Sovereign Hybrid, a high-performance Linux environment combining RHEL, Arch, and Nix ideologies. 

**Creator:** Just made by **Natalie Spiva**, Co-Lead of AcreetionOS. This is a solo project and personal endeavor.

*Note: This project is under active development. Expect broken links, missing documentation, and frequent architectural shifts. It is not ready for production use or general deployment.*

**Affiliation:** Proudly part of the [AcreetionOS Ecosystem](https://acreetionos.org).

## Tech Stack

- Plain HTML5, Tailwind CSS (via CDN), JavaScript (no framework)
- GitHub Pages deployment
- Playwright for local testing

## Design Philosophy

ArttulOS follows a **Brutalist Black** design scheme:
- Pure Black (#000000) backgrounds
- Monochromatic accents (White/Grey/Silver)
- High-contrast typography using 'Space Grotesk' and 'JetBrains Mono'
- Prominent branding as an AcreetionOS Affiliate

## Development

### Local Preview

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Local Testing

```bash
npm install
npx playwright test
```

## Structure

```
.
├── index.html          # Dashboard (Landing Page)
├── contact.html        # Nexus (Contact)
├── faq.html            # Intel Database (FAQ)
├── install.html        # Provisioning (Installation)
├── repo-sync.html      # Source Tracker (Git Tracker)
├── requirements.html   # Resource Matrix (System Requirements)
├── selfhelp.html       # Knowledge Engine (Search)
└── tests/              # Playwright tests
```

## Deployment

Automatic deployment to GitHub Pages.

## License

See [LICENSE](LICENSE)
