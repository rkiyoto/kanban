# React Kanban

This project ships a 3-list Kanban React application

## Runnning

1. Start API:

```
  $ cd BACK
  $ npm install
  $ npm run server
```

2.

```
  $ cd FRONT/kanban
  $ yarn
  $ yarn start
```

The application will be running on http://localhost:3000

## Quick guide

1. Before start creating your cards and moving them, you must Login before. Do it clicking on `Login` button on top-right corner

2. Create a card clicking on `+` on bottom-right corner

3. Enjoy :D

## Typescript

To set Typescript version to `4.1.2` [check here](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions):

```
$ npm install -g typescript@4.1.2
```

Then update

`"typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib"`
<br>
on `.vscode/settings.json` file

**OR**

If using Typescript version < 4.1.2, set `./tsconfig.json` to

`compilerOptions.jsx = "react"`
<br>
after running `yarn start` command

## Testing

To run tests, use command:

```
$ yarn test
```

## 3rd party libraries/References

- [Axios](https://github.com/axios/axios)

- [Toast](https://github.com/fkhadra/react-toastify)

- [React DnD](https://react-dnd.github.io/react-dnd/about)

- [React Hook Form](https://github.com/react-hook-form/react-hook-form)

- [Color Pallete](https://www.canva.com/colors/color-palettes/pastel-dreams/)

## Known issues/Debts

- Drag/drop on recently updated cards will reverse their changes :(

- Running `yarn start` using 4.0.3 Typescript version will spam `Cannot use JSX unless the '--jsx' flag is provided` errors across the code, to avoid this try one of these:

  - [Setting typescript version to 4.1.2](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)
  - Setting `compilerOptions.jsx = "react"` on ./tsconfig.json file

- Missing Login modal to input username and password

- Lacks some a11y-friendly components

- Lacks i18n treatment
