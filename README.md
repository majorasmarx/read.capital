# read.capital

a website for reading cool things

this site uses [astro](https://astro.build/), a framework for building websites
that comes batteries-included and has a convenient templating syntax.

you'll need [node.js](https://nodejs.org/en) installed to set it up locally. you
probably want to use a node version manager; i recommend
[fnm](https://github.com/Schniz/fnm), which works cross-platform and supports
`.node-version` files (like the one in the root of this repo) for automatic
version selection.

# setup

with node installed, to set up the the project, run

```sh
corepack enable
pnpm install
```

> the above enables the built-in node tool
> [corepack](https://nodejs.org/api/corepack.html) to allow using alternate node
> package managers; this project uses [pnpm](https://github.com/pnpm/pnpm/) for
> package management. there's no need to install these tools separately.

## commands

| command        | action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Installs dependencies                       |
| `pnpm start`   | Starts local dev server at `localhost:3000` |
| `pnpm build`   | Build production site locally to `./dist/`  |

## deployment

the site is currently deployed on github pages (automatically on push via github
actions). there's no need to build the site manually unless you want to inspect
the production output locally.
