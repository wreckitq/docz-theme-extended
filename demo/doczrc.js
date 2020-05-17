const pkgName = 'docz-theme-extended';

export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: pkgName,
  description: `${pkgName}.`,
  menu: ['Introduction', 'Installation', { name: 'UI', menu: [] }, { name: 'API', menu: [] }],
  themeConfig: {
    footer: {
      navigation: true
    },
    logo: {
      src: "/public/assets/logo.svg",
      width: "100%"
    },
    menu: {
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3
      }
    },
  },
  docgenConfig: {
    searchPatterns: [
      "../**/*.{ts,tsx,js,jsx,mjs}",
      "../theme/src/components/**/*.{ts,tsx,js,jsx,mjs}",
      "!**/node_modules",
      "!../**/node_modules",
      "!**/doczrc.js",
      "!../**/doczrc.js",
    ]
  },
  filterComponents: (files) =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};