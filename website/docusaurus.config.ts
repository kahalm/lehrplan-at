import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Österreichischer Lehrplan',
  tagline: 'Volksschule – Vergleich alter und neuer Lehrplan',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://kahalm.github.io',
  baseUrl: '/lehrplan-at/',

  organizationName: 'kahalm',
  projectName: 'lehrplan-at',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/kahalm/lehrplan-at/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Lehrplan AT',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'lehrplanSidebar',
          position: 'left',
          label: 'Neuer Lehrplan',
        },
        {
          type: 'docSidebar',
          sidebarId: 'altSidebar',
          position: 'left',
          label: 'Alter Lehrplan',
        },
        {
          type: 'docSidebar',
          sidebarId: 'vergleichSidebar',
          position: 'left',
          label: 'Vergleich',
        },
        {
          href: 'https://github.com/kahalm/lehrplan-at',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quellen',
          items: [
            {
              label: 'RIS – Bundesrecht',
              href: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009275&Artikel=&Paragraf=&Anlage=1&Uebergangsrecht=',
            },
            {
              label: 'BMBWF',
              href: 'https://www.bmbwf.gv.at',
            },
          ],
        },
      ],
      copyright: `Datenquelle: RIS/BMBWF. Aufbereitet mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
