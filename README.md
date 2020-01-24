# Quasar-Framework Monorepo - Starter Kit

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<img src="https://img.shields.io/npm/v/quasar.svg?label=quasar"> <img src="https://img.shields.io/npm/v/%40quasar/app.svg?label=@quasar/app"> <img src="https://img.shields.io/npm/v/%40quasar/cli.svg?label=@quasar/cli"> <img src="https://img.shields.io/npm/v/%40quasar/extras.svg?label=@quasar/extras">

------

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

## Required

Global lerna installation
```bash
$ npm install -g lerna lerna-wizard
```

## Usage

-   `yarn` - Install dependencies
-   `yarn bootstrap` - Link local packages together and install remaining package dependencies.
-   `yarn test:unit:ui` - Runs [majestic](https://github.com/Raathigesh/majestic) GUI
-   `yarn lint` - Runs Lint in every package.
-   `yarn lint:fix` - Runs Lint in every package and applies possibles fixes.
-   `yarn update:check` - Check for updates on your packages.
-   `yarn update:update` - Check for updates on your packages and install the latest.
-   `git-cz` - Commit your changes using [commitizen](https://github.com/commitizen/cz-cli).

## Releasing

-   `yarn new-version` - Bump version of packages changed since the last release and generate changelog.
-   `yarn release` - Publish packages to npm

## Lerna

-   `lerna clean` - Clean the node_modules on the packages.
-   `lerna changed` - Show which packages have changed.
-   `lerna diff` - Show specifically what files have cause the packages to change.
-   `lerna-wizard` - A CLI tool to help with lerna tasks

## Commit message format
```
feat(elements-table): add hat wobble
^--^ ^------------^   ^------------^
|    |                |
|    |                +-> Summary in present tense.
|    +------------------> Scope: folder name of package in kebab-case (e.g. elements-table)
|
+-----------------------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Commit without validation
```
git commit -m "..." --no-verify
```

### Linking

When linking inside of the Monorepo, everything works as expected. If you are trying to consume packages from this Monorepo _in a different application_ locally, using `npm link` or `yarn link` [does not work as expected](https://github.com/yarnpkg/yarn/issues/5538). However, we have a workaround for the time being.

1. Run `yarn build`
2. Change the `package.json` of the consumer from `$YOUR_PACKAGE_NAME` (which lives inside the monorepo) to `file:./../monorepo/packages/$YOUR_PACKAGE_NAME`
3. Run `rm -rf node_modules && yarn` in the consumer
4. 🎉
