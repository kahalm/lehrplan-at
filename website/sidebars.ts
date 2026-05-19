import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  lehrplanSidebar: [
    {
      type: 'category',
      label: 'Neuer Lehrplan (ab 2023/24)',
      items: [
        'neu/uebersicht',
        'neu/stundentafeln',
        'neu/uebergreifende-themen',
        {
          type: 'category',
          label: 'Fachlehrpläne',
          items: [
            'neu/deutsch',
            'neu/mathematik',
            'neu/sachunterricht',
            'neu/weitere-faecher',
          ],
        },
        {
          type: 'category',
          label: 'Kompetenzraster',
          items: [
            'neu/kompetenzraster-deutsch',
            'neu/kompetenzraster-mathematik',
            'neu/kompetenzraster-sachunterricht',
            'neu/kompetenzraster-fremdsprache',
            'neu/kompetenzraster-musik',
            'neu/kompetenzraster-kunst',
            'neu/kompetenzraster-technik',
            'neu/kompetenzraster-sport',
          ],
        },
        {
          type: 'category',
          label: 'Lehrplankommentare',
          items: [
            'neu/kommentar-deutsch',
            'neu/kommentar-fremdsprache',
            'neu/kommentar-sachunterricht',
            'neu/kommentar-musik',
            'neu/kommentar-kunst',
            'neu/kommentar-technik',
            'neu/kommentar-sport',
          ],
        },
        'neu/vorschulstufe-daz',
      ],
    },
  ],
  altSidebar: [
    {
      type: 'category',
      label: 'Alter Lehrplan (bis 2023)',
      items: [
        'alt/uebersicht',
        'alt/allgemeine-bestimmungen',
        'alt/stundentafeln',
        {
          type: 'category',
          label: 'Fachlehrpläne',
          items: [
            'alt/deutsch',
            'alt/mathematik',
            'alt/sachunterricht',
            'alt/weitere-faecher',
          ],
        },
        'alt/vorschulstufe-weitere',
      ],
    },
  ],
  vergleichSidebar: [
    'vergleich/uebersicht',
  ],
  quellenSidebar: [
    'quellen',
  ],
};

export default sidebars;
