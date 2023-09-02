# amwork-frontend

This is the README.md file for the "amwork-frontend" project, which is a frontend application developed using React, Mobx, and TypeScript. This project uses Vite as a development server and build tool, and it includes linting and preview scripts for ease of development.

## Project Setup

Before you can start working on the "amwork-frontend" project, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository:

   ```shell
   git clone git@github.com:AD1N1993/aw-test.git
   ```

2. Navigate to the project directory:

   ```shell
   cd amwork-frontend
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts using npm:

### Development Server

To start a development server using Vite:

```shell
npm run dev
```

This command will launch the development server, and your application will be available at [http://localhost:3000](http://localhost:3000). The server will automatically reload when you make changes to the code.

### Building for Production

To build the project for production, you can run:

```shell
npm run build
```

This command will compile your TypeScript code and create an optimized build in the `dist` directory.

### Linting

To run ESLint for linting your TypeScript and React code:

```shell
npm run lint
```

This script will check your code for linting errors and display them in the console.

### Preview

To preview your production build locally, you can use:

```shell
npm run preview
```

This will serve your production build, allowing you to test it as if it were deployed.

## Dependencies

Here is a list of the main dependencies used in this project:

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for making network requests.
- [mobx](https://mobx.js.org/README.html): State management library for React applications.
- [mobx-react-lite](https://mobx.js.org/README.html#mobx-react): React bindings for MobX.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): React package for working with the DOM.

## Development Dependencies

Here are some development-specific dependencies used in this project:

- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker): A library for generating fake data.
- [@types/react](https://www.npmjs.com/package/@types/react) and [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript type definitions for React and ReactDOM.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): ESLint plugins for TypeScript.
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): Vite plugin for React support.
- [eslint](https://www.npmjs.com/package/eslint): Linting tool for JavaScript and TypeScript.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint plugin for React Hooks.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ESLint plugin for React Refresh.
- [gh-pages](https://www.npmjs.com/package/gh-pages): Publish your project to GitHub Pages.
- [sass](https://www.npmjs.com/package/sass): Sass/SCSS compiler for stylesheets.
- [typescript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing to the language.
- [vite](https://vitejs.dev/): A build tool and development server for modern web applications.

Please refer to the respective documentation of these dependencies for more information.

Happy coding!
