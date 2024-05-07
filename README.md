# React Typescript Project Template

<!-- readme header  -->
<div align="center">
  <p align="left">
    <br />
    <a href="https://github.com/ricotandrio/react-typescript-template/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/ricotandrio/react-typescript-template/issues">Report Bug</a>
  </p>
</div>

<!-- table of contents  -->
## Table of Contents

<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
  </li>
  <li>
    <a href="#folder-tree">Folder Tree</a>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
</ol>

## About The Project

This template offers a streamlined setup for building React applications with TypeScript, Redux state management, Zod for data validation, and Vite for fast development with Hot Module Replacement (HMR). It includes essential ESLint rules for maintaining code quality and consistency. 

## Folder Tree
```
template
├───public
├───src
│   ├───apis
│   │   ├───helpers
│   │   └───services
│   ├───assets
│   │   ├───datas
│   │   ├───fonts
│   │   │   ├───Kanit
│   │   │   └───Poppins
│   │   ├───images
│   │   └───styles
│   ├───components
│   ├───configs
│   ├───models
│   │   ├───database
│   │   ├───requests
│   │   ├───responses
│   │   └───zod
│   ├───pages
│   ├───redux
│   │   └───user
│   │   │   ├───userSelectors.ts
│   │   │   ├───userSlice.ts
│   │   │   └───userThunks.ts
│   │   └───store.ts
│   ├───main.tsx
│   ├───router.tsx
│   └───vite-env.d.ts
├───.env
└───index.html
```

## Getting Started

### Prerequisites

**Eslint Configuration**

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


### Installation
To begin, clone this repository to your local machine.

```bash
git clone https://github.com/ricotandrio/react-typescript-template.git

cd react-typescript-template
```

Use npm to install the necessary modules.

```bash
npm install
```

Update .gitignore by uncommand dotenv environment variable files ignore.

```env
# dotenv environment variable files
# .env
# .env.development.local
# .env.test.local
# .env.production.local
# .env.local
```

Then, execute the following command:

```bash
npm run dev
```

## Usage
In this section, explain the utility of the project and provide screenshots of the app.

## Roadmap
- ✅ Feature one.
- ✅ Feature two.
- ✅ Feature three.
  - ❌ Sub-feature three.

## License 
This project is under the UNILICENSE. See LICENSE.txt for more information.

## Dependencies
Below is a list of packages or libraries used for this project:

- "@reduxjs/toolkit": "^2.2.3"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-redux": "^9.1.0"
- "react-router-dom": "^6.22.3"
- "tslib": "^2.6.2"
- "zod": "^3.22.4"
