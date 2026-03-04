# Wedding Invitation &middot; [![pnpm](https://img.shields.io/badge/pnpm-10.x-blue)](https://www.npmjs.com/package/pnpm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ManoGuzman/wedding-invitation/blob/master/LICENSE)

<img src="https://img.icons8.com/?size=100&id=COr5WfRd65V3&format=png&color=000000" alt="Wedding Ring" align="right">

> Create unique invitation experiences with personalized URLs for each guest

Modern wedding invitation SPA built with Next.js - personalized invites per guest with animated countdown.

## Table of Contents

- [Installing / Getting started](#installing--getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Developing](#developing)
  - [Built With](#built-with)
  - [Prerequisites](#prerequisites)
  - [Setting up Dev](#setting-up-dev)
- [Building](#building)
- [Deploying](#deploying)
- [API Documentation](#api-documentation)
- [Tests](#tests)
- [Style Guide](#style-guide)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Licensing](#licensing)

## Installing / Getting started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
wedding-invitation/
├── app/                        # Next.js App Router
│   ├── [id]/                  # Dynamic route for personalized invites
│   │   └── page.tsx           # Guest-specific invitation page
│   ├── components/            # React components
│   │   ├── sections/          # Invitation section components
│   │   │   ├── BackgroundSection.tsx
│   │   │   ├── CeremonySection.tsx
│   │   │   ├── CountdownSection.tsx
│   │   │   ├── DateSection.tsx
│   │   │   ├── DressCodeSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PresentSection.tsx
│   │   │   ├── ReceptionSection.tsx
│   │   │   ├── RsvpSection.tsx
│   │   │   └── SvgDefs.tsx
│   │   └── WeddingInvitation.tsx  # Main SVG invitation component
│   ├── data/                  # Data files
│   │   └── guests.json        # Guest list with IDs and attendance
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page (public invitation)
├── scripts/                   # Utility scripts
│   ├── generateLinks.js       # Generate personalized invitation URLs
│   ├── encrypt-guests.js      # Encrypt guest names for privacy
│   ├── decrypt-guests.js      # Decrypt guest names
│   └── extract-images.js      # Extract images from SVG
├── tests/                     # Test files
├── docs/                      # Generated API documentation (do not edit manually)
├── public/                    # Static assets
├── typedoc.json               # TypeDoc configuration
└── package.json               # Project dependencies and scripts
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NETLIFY_URL` | Base URL for generating invitation links (e.g., `https://your-site.netlify.app`) | Yes (for `generateLinks.js`) |
| `ALGORITHM` | Encryption algorithm (e.g., `aes-256-cbc`) | Yes (for encrypt/decrypt scripts) |
| `PASSWORD` | Password for encrypting guest data | Yes (for encrypt/decrypt scripts) |

Example `.env.local`:

```bash
NETLIFY_URL=https://wedding-invitation.netlify.app
ALGORITHM=aes-256-cbc
PASSWORD=your-secret-password
```

> **Note**: Never commit `.env.local` to version control. Use `.env.example` for reference.

## Developing

### Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation)

Install pnpm globally if you don't have it:

```bash
npm install -g pnpm
```

### Setting up Dev

Clone the repository and install dependencies:

```shell
git clone https://github.com/ManoGuzman/wedding-invitation.git
cd wedding-invitation/
pnpm install
```

Create a `.env.local` file in the root directory (see [Environment Variables](#environment-variables)).

## Building

To create a production build:

```shell
pnpm build
```

This will generate an optimized production build in the `.next` directory.

To preview the production build locally:

```shell
pnpm start
```

## Deploying

This project is optimized for deployment on [Netlify](https://www.netlify.com/):

```shell
# install the Netlify CLI if you don't have it
pnpm add -g netlify-cli

# build the app locally
pnpm build

# initialize or link a site (run once)
netlify init

# deploy the production build
# if you're exporting a static version, use --dir=out
# otherwise point to .next
netlify deploy --prod --dir=.next
```

You can also connect the GitHub repository in the Netlify dashboard and
configure the build command (`pnpm build`) and publish directory
(`.next` or `out` depending on your setup) for automatic deployments on
every push to the main branch.

## API Documentation

This project uses [TypeDoc](https://typedoc.org/) to generate API documentation from JSDoc comments.

To generate the documentation:

```shell
pnpm docs
```

This will create a `docs/` folder with Markdown files containing the API reference. The documentation includes:

- Component props and interfaces
- Function parameters and return types
- Type definitions

Generated docs are excluded from version control (see `.gitignore`).

## Tests

Currently, the project uses Next.js built-in testing capabilities with Jest. To run tests:

```shell
pnpm test
```

Tests cover:

- Component rendering
- Personalized URL routing
- Countdown timer functionality

## Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with TypeScript conventions.

To check code formatting:

```shell
pnpm lint
```

To automatically fix formatting issues:

```shell
pnpm lint:fix
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests and documentation as appropriate.

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ManoGuzman/wedding-invitation/tags).

## Licensing

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ManoGuzman/wedding-invitation/blob/master/LICENSE) file for details.
