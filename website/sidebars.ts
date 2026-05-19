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
};

export default sidebars;
