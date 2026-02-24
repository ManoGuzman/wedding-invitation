# Wedding Invitation &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![pnpm](https://img.shields.io/badge/pnpm-10.28.2-blue)](https://www.npmjs.com/package/pnpm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ManoGuzman/wedding-invitation/blob/master/LICENSE)

<img src="https://img.icons8.com/?size=100&id=COr5WfRd65V3&format=png&color=000000" alt="Wedding Ring" align="right">

> Create unique invitation experiences with personalized URLs for each guest

Modern wedding invitation SPA built with Next.js - personalized invites per guest with animated countdown.

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

## Developing

### Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [pnpm 10.28.2](https://pnpm.io/) - Fast, disk space efficient package manager

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation) (v10.28.2)

Install pnpm globally if you don't have it:

```bash
npm install -g pnpm@10.28.2
```

### Setting up Dev

Clone the repository and install dependencies:

```shell
git clone https://github.com/ManoGuzman/wedding-invitation.git
cd wedding-invitation/
pnpm install
```

Create a `.env.local` file in the root directory for local environment variables if needed.

### Building

To create a production build:

```shell
pnpm build
```

This will generate an optimized production build in the `.next` directory.

To preview the production build locally:

```shell
pnpm start
```

### Deploying / Publishing

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

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ManoGuzman/wedding-invitation/tags).

## Tests

Currently, the project uses Next.js built-in testing capabilities. To run tests:

```shell
pnpm test
```

Tests cover:

- Component rendering
- Personalized URL routing
- Countdown timer functionality

## Style guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with TypeScript conventions.

To check code formatting:

```shell
pnpm lint
```

To automatically fix formatting issues:

```shell
pnpm lint:fix
```

## Licensing

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ManoGuzman/wedding-invitation/blob/master/LICENSE) file for details.
