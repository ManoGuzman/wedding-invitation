
<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ManoGuzman/wedding-invitation">
    <img src="https://img.icons8.com/?size=100&id=COr5WfRd65V3&format=png&color=000000" alt="Wedding-Ring-Logo" width="80" height="80">
  </a>

<h3 align="center">Wedding Invitation</h3>

  <p align="center">
    A personalized digital wedding invitation web app built with Next.js. Each guest receives a unique URL that renders a fully personalized, animated SVG invitation in Spanish with their name, reserved seat count, venue details, a live countdown, and a WhatsApp RSVP button.
    <br />
    <a href="https://github.com/ManoGuzman/wedding-invitation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ManoGuzman/wedding-invitation/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/ManoGuzman/wedding-invitation/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A production-grade digital wedding invitation for the wedding of **Gabriela Hernández** and **Alejandro Mora** on **April 18, 2026** in Costa Rica.

The invitation is a scrollable, SVG-based web page deployed on Netlify. The entire design is rendered as a single inline SVG composed from React components, preserving pixel-perfect fidelity from the original vector design. Each of the 35 guests receives a unique personalized URL (e.g. `/hernandez-familia`) that shows their name and reserved seat count.

Key features:
- **Personalized per-guest invitations** via dynamic Next.js routes and a `guests.json` registry
- **Live countdown timer** updating every second until the wedding date
- **Animated scroll reveal** powered by Framer Motion — each SVG section fades in as the user scrolls
- **Ceremony & Reception details** with embedded Google Maps links
- **Dress code section** with color swatches showing which colors to avoid
- **Gift section** with Sinpe Móvil (Costa Rican mobile payment) numbers and WhatsApp deep links
- **WhatsApp RSVP button** pre-filled with the guest's personalized confirmation message
- **Guest link generator script** to print all 35 personalized Netlify URLs at once
- **AES-256-CBC encryption scripts** to protect the guest list in version control

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next.js][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwind CSS][TailwindCSS]][Tailwind-url]
* [![Framer Motion][FramerMotion]][FramerMotion-url]
* [![Jest][Jest]][Jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- **Node.js** 20 or 22
- **pnpm** (used as the package manager)

```sh
npm install -g pnpm
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ManoGuzman/wedding-invitation.git
   cd wedding-invitation
   ```

2. Install dependencies
   ```sh
   pnpm install
   ```

3. Copy the environment variables template and fill in your values
   ```sh
   cp .env.example .env
   ```

   | Variable      | Description                                                             |
   | ------------- | ----------------------------------------------------------------------- |
   | `NETLIFY_URL` | Your Netlify deployment base URL (e.g. `https://your-site.netlify.app`) |
   | `ALGORITHM`   | Encryption algorithm — use `aes-256-cbc`                                |
   | `PASSWORD`    | Passphrase used for AES-256-CBC key derivation                          |

4. Run the development server
   ```sh
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the generic (non-personalized) invitation, or [http://localhost:3000/\<guest-id\>](http://localhost:3000) for a personalized one using an ID from `app/data/guests.json`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Development

```sh
pnpm dev       # Start Next.js dev server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
pnpm lint:fix  # Run ESLint with auto-fix
pnpm test      # Run Jest test suite
pnpm docs      # Generate TypeDoc documentation to docs/
```

### Guest link generation

Generate personalized Netlify URLs for all guests (requires `NETLIFY_URL` in `.env`):

```sh
node scripts/generateLinks.js
```

### Guest list encryption / decryption

Encrypt `app/data/guests.json` before committing sensitive data:

```sh
node scripts/encrypt-guests.js
node scripts/decrypt-guests.js
```

### Extracting images from the master SVG

If you update `public/wedding_edit.svg`, re-extract the embedded PNG images:

```sh
node scripts/extract-images.js
```

### Adding or editing guests

Edit `app/data/guests.json`. Each entry has the shape:

```json
{ "id": "hernandez-familia", "name": "FAMILIA HERNÁNDEZ", "amount": 4 }
```

- `id` — URL slug (becomes the route `/[id]`)
- `name` — Display name shown on the invitation
- `amount` — Number of reserved seats

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] SVG-based invitation design composed from React components
- [x] Personalized per-guest dynamic routes
- [x] Live countdown timer
- [x] Framer Motion scroll-reveal animations
- [x] Ceremony & Reception sections with Google Maps links
- [x] Dress code section with color swatches
- [x] Gift section with Sinpe Móvil and WhatsApp links
- [x] WhatsApp RSVP button
- [x] Guest link generator script
- [x] AES-256-CBC guest list encryption scripts
- [x] GitHub Actions CI (lint → test → build on Node 20 & 22)
- [x] TypeDoc API documentation
- [ ] Add app screenshot to README
- [ ] RSVP response tracking (store confirmations server-side)
- [ ] Admin dashboard to view RSVP status per guest

See the [open issues](https://github.com/ManoGuzman/wedding-invitation/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome. If you have a suggestion, please fork the repo and create a pull request, or open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/ManoGuzman/wedding-invitation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ManoGuzman/wedding-invitation" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Manuel Guzman — [GitHub @ManoGuzman](https://github.com/ManoGuzman)

Project Link: [https://github.com/ManoGuzman/wedding-invitation](https://github.com/ManoGuzman/wedding-invitation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Next.js App Router](https://nextjs.org/docs/app)
* [Framer Motion](https://www.framer-motion.com/)
* [Tailwind CSS v4](https://tailwindcss.com/)
* [contrib.rocks](https://contrib.rocks)
* [Shields.io](https://shields.io)
* [Icons8](https://icons8.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/ManoGuzman/wedding-invitation.svg?style=for-the-badge
[contributors-url]: https://github.com/ManoGuzman/wedding-invitation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ManoGuzman/wedding-invitation.svg?style=for-the-badge
[forks-url]: https://github.com/ManoGuzman/wedding-invitation/network/members
[stars-shield]: https://img.shields.io/github/stars/ManoGuzman/wedding-invitation.svg?style=for-the-badge
[stars-url]: https://github.com/ManoGuzman/wedding-invitation/stargazers
[issues-shield]: https://img.shields.io/github/issues/ManoGuzman/wedding-invitation.svg?style=for-the-badge
[issues-url]: https://github.com/ManoGuzman/wedding-invitation/issues
[license-shield]: https://img.shields.io/github/license/ManoGuzman/wedding-invitation.svg?style=for-the-badge
[license-url]: https://github.com/ManoGuzman/wedding-invitation/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/manuel-guzmán-b87b841bb

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[FramerMotion]: https://img.shields.io/badge/Framer_Motion-EF0080?style=for-the-badge&logo=framer&logoColor=white
[FramerMotion-url]: https://www.framer.com/motion/
[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
