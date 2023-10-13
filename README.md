# RTB-Client

## requirements

node.js - 18.18
make
docker

## Setup

To be used as git submodule to [rtb-house](https://github.com/zakrzaq/rtb-house) in `./client` directory.

Or for standalone use:

1. .env

- setup `.env` file. [example](#environment-variables)

2. local setup:

- run `npm install`
- to run as a local instance run `npm run dev`

3. docker setup:

- to build the Docker image execute `make build:dev`
- to run the Docker image execute 'docker run -it -p 8080:8080 rtb/client'

### ENVIRONMENT VARIABLES

```
VITE_API_URL=http://localhost:3030/api

```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
