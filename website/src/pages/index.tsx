import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Start" description="Österreichischer Lehrplan der Volksschule">
      <main style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Österreichischer Lehrplan der Volksschule</h1>
        <p>
          Vollständig aufbereitete und durchsuchbare Darstellung des alten und neuen
          Lehrplans der österreichischen Volksschule (Anlage 1 zum SchOG).
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '2rem'}}>
          <div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}}>
            <h3>Neuer Lehrplan</h3>
            <p>Ab 2023/24, BGBl. II Nr. 178/2025. Kompetenzorientiert.</p>
            <Link className="button button--primary" to="/neu/uebersicht">
              Zum neuen Lehrplan
            </Link>
          </div>

          <div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}}>
            <h3>Alter Lehrplan</h3>
            <p>Bis 2023, BGBl. II Nr. 230/2018. Lehrstofforientiert.</p>
            <Link className="button button--secondary" to="/alt/uebersicht">
              Zum alten Lehrplan
            </Link>
          </div>

          <div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}}>
            <h3>Vergleich</h3>
            <p>Alle Fächer im direkten Vergleich alt vs. neu.</p>
            <Link className="button button--outline button--primary" to="/vergleich/uebersicht">
              Zum Vergleich
            </Link>
          </div>
        </div>

        <div style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)'}}>
          <p>
            <strong>Quelle:</strong>{' '}
            <a href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009275&Artikel=&Paragraf=&Anlage=1&Uebergangsrecht=">
              RIS – Bundesrecht konsolidiert
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}
