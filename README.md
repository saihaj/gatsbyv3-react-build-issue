**Solution**: https://github.com/gatsbyjs/gatsby/discussions/30409#discussioncomment-518387

# Gatsby Issue

When in development mode react components work as expected. When you run this locally using `cd packages/www && yarn start` then visit `http://localhost:8000/page-2` you should see the page with a navbar. On small screens there is a menu button to open the menu. Also this uses [`gatsby-background-image`](https://www.gatsbyjs.com/plugins/gatsby-background-image/) for the hero background. This is how I would expect that page to look when I build it to publish it.
![dev](/dev.gif)

But when I try build it and serve it `cd packages/www && yarn build && yarn gatsby serve` on `http://localhost:9000/page-2` I would expect the page to have a background image in hero and the menu button to be interactive. But for some reason that is not working.
![build](/build.gif)

## Development Setup

Suggested IDE is [VSCode](https://code.visualstudio.com) since all the configs are provided.

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.JS](https://nodejs.org/en/download/) version `>=14.x`
- [`yarn`](https://yarnpkg.com/getting-started/install) package manager

### Cloning and running this locally

- Get the source code by cloning this repo
- VS Code should ask you to install all the extensions if you don't have them already.
  - You can also manually verify all are installed by installing the ones listed in [`.vscode/extensions.json`](.vscode/extensions.json)
- To install all dependencies just run `yarn` in terminal
- You are all set! Happy Coding :)

## Available Scripts

`yarn <command>`

Available commands are:
| Command | Description |
| ------- | ----------- |
| `lint` | Run eslint on all packages |
| `check:spelling` | Run cspell to check spellings|
