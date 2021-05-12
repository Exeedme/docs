/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Exeedme Docs",
  tagline:
    "Exeedme is a blockchain-powered tournament platform allowing gamers at all skill-levels to monetize their skills, enabled by $XED.",
  url: "https://docs.exeedme.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "exeedme",
  projectName: "exeedme-docs",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "",
      logo: {
        alt: "Exeedme Logo",
        src: "img/logo.png",
        href: "https://exeedme.com",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
