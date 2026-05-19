# Projekt: Österreichischer Lehrplan

## Kontext
Dieses Repository beschäftigt sich mit dem **österreichischen Lehrplan** (Curriculum).
Der Lehrplan wird vom Bundesministerium für Bildung, Wissenschaft und Forschung (BMBWF) vorgegeben und regelt die Bildungsinhalte an österreichischen Schulen.

## Relevante Quellen
- Offizielle Lehrpläne: https://www.bmbwf.gv.at/Themen/schule/schulrecht/rs/1997-2017/2023-03.html
- RIS (Rechtsinformationssystem): https://www.ris.bka.gv.at
- **Volksschule Anlage 1 (SchOG):** https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009275&Artikel=&Paragraf=&Anlage=1&Uebergangsrecht=

## Projektstruktur
```
lehrplan/
├── CLAUDE.md                                    # Projektkontext (dieses File)
└── volksschule/
    ├── vergleich_alt_neu.md                     # Vergleichstabelle alt vs. neu (alle Fächer)
    ├── neu/                                     # Neuer Lehrplan (ab 2023/24, BGBl. II Nr. 178/2025)
    │   ├── NOR40271469.pdf                      # Original-PDF von RIS (140 Seiten)
    │   ├── lehrplan_volltext.txt                # Volltext-Export des PDFs
    │   ├── lehrplan_volksschule.md              # Überblick & Zusammenfassung
    │   ├── stundentafeln.md                     # Stundentafeln (Vorschulstufe + 1.–4. Schulstufe)
    │   ├── uebergreifende_themen.md             # 13 übergreifende Themen mit Kompetenzzielen
    │   ├── fachlehrplan_deutsch.md              # Fachlehrplan Deutsch
    │   ├── fachlehrplan_mathematik.md           # Fachlehrplan Mathematik
    │   ├── fachlehrplan_sachunterricht.md       # Fachlehrplan Sachunterricht
    │   ├── fachlehrplaene_weitere.md            # Musik, Kunst, Technik, Sport, Englisch, etc.
    │   └── vorschulstufe_und_daz.md             # Vorschulstufe + Deutschförderklassen/DaZ
    └── alt/                                     # Alter Lehrplan (BGBl. II Nr. 230/2018, bis 31.08.2023)
        ├── NOR40226176.pdf                      # Original-PDF von RIS (224 Seiten)
        ├── lehrplan_alt_volltext.txt             # Volltext-Export des PDFs
        ├── lehrplan_volksschule_alt.md           # Überblick & Vergleichstabelle alt/neu
        ├── allgemeine_bestimmungen.md            # Bildungsziel, Allg. Bestimmungen, 8 did. Grundsätze
        ├── stundentafeln.md                      # Stundentafeln (Vorschule, Grundschule, Oberstufe)
        ├── fachlehrplan_deutsch.md               # Fachlehrplan Deutsch
        ├── fachlehrplan_mathematik.md            # Fachlehrplan Mathematik
        ├── fachlehrplan_sachunterricht.md        # Fachlehrplan Sachunterricht
        ├── fachlehrplaene_weitere.md             # Musik, Bildnerische Erz., Werken, Sport, Fremdsprache
        └── vorschulstufe_und_weitere.md          # Vorschulstufe + Freigegenstände + Deutschförderklassen
```

## Schultypen
- **Volksschule** (Primarstufe, 1.–4. Schulstufe)
- **Mittelschule / AHS-Unterstufe** (Sekundarstufe I, 5.–8. Schulstufe)
- **AHS-Oberstufe** (Sekundarstufe II, 9.–12. Schulstufe)
- **BHS** (Berufsbildende Höhere Schulen, z.B. HTL, HAK, HLW)
- **BMS** (Berufsbildende Mittlere Schulen)

## Lehrplan-Reform 2023/24
Seit dem Schuljahr 2023/24 gelten neue kompetenzorientierte Lehrpläne für die Primarstufe und Sekundarstufe I. Wichtige Neuerungen:
- Kompetenzorientierung statt reiner Inhaltsvorgaben
- Fächerübergreifende Kompetenzen
- Digitale Grundbildung als Pflichtfach (Sekundarstufe I)
- Stärkere Individualisierung und Differenzierung

## Sprache
- Projektsprache: **Deutsch**
- Code-Kommentare und Dokumentation auf Deutsch

## Hinweise für Claude
- Beim Arbeiten mit Lehrplan-Daten auf die korrekte Zuordnung zu Schulstufen und Fächern achten
- Österreichische Terminologie verwenden (z.B. "Schulstufe" statt "Klasse", "Volksschule" statt "Grundschule")
- Rechtschreibung: österreichisches Deutsch (z.B. "Jänner", "heuer")
