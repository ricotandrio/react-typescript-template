# React Typescript + Redux + Zod + Vite Template

This template offers a streamlined setup for building React applications with TypeScript, Redux state management, Zod for data validation, and Vite for fast development with Hot Module Replacement (HMR). It includes essential ESLint rules for maintaining code quality and consistency.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Folder Structure
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

## Expanding the ESLint configuration

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
