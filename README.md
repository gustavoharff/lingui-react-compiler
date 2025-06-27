# lingui-react-compiler

1. yarn install
2. yarn lingui:compile

---

1. Set `reactCompiler` in `next.config.ts` as `false`.
2. yarn build
3. yarn start
4. open `http://localhost:3000/pt-BR`

> Everything should work as expected.

---

1. Set `reactCompiler` in `next.config.ts` as `true`.
2. yarn build
3. yarn start
4. open `http://localhost:3000/pt-BR`

> The `Trans` component should render an id instead of the translation.
