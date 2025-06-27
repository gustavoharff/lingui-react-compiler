/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'pt-BR'],
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/']
    }
  ]
}
