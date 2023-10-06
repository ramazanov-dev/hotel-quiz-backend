# Hotel quiz backend
Backend for my own quiz app

All sources must be placed in _./src_ folder

## Requirements

* Node.JS version 18 or greater;
* Yarn version 3 or greater;
* BASH environment. Any linux based OS or WSL or Git Bash

### If you use Microsoft VS Code

Run in terminal after all modules installed:

```shell
yarn dlx @yarnpkg/sdks vscode
```

## Features

* _tsconfig.json_ optimized for building NodeJS apps;
* ESLint included;
* Nodemon included;
* Husky included. It allows passing checks before git commiting. Checks are scripted in _scripts/checks.sh_ folder;

## How to's:

__Build__: `yarn build`\
__Run in development mode__: `yarn dev`\
__Run in production mode__: `yarn start` (please make sure that your project is built)\
__Lint__: `yarn lint`\
__Prepare husky__: `yarn prepare`
