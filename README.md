# Gwen Website

This project uses [Docusaurus 2](https://docusaurus.io/) to build and publish the [Gwen website](https://gweninterpreter.org).

## Install

This command installs all dependencies locally.

```console
yarn install
```

## Start

This command starts a local server and opens the site in a browser window. Most changes are reflected live without having to restart.

```console
yarn start
```

## Build

This command builds the static website and outputs it to the `build` directory.

```console
yarn build
```

## Publish

Merging or pushing changes to the `master` branch will trigger the `website` workflow in GitHub Actions to build, verify and publish the site.
- The generated website will be pushed to the `gh-pages` branch
- The website will be served at https://gweninterpreter.org

