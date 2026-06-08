# lehrplan-at

Aufbereiteter österreichischer Volksschul-Lehrplan (alt & neu) als Docusaurus-Website.
Inhalte liegen in `volksschule/`, die Website in `website/`. Inhaltlicher Kontext: siehe [CLAUDE.md](CLAUDE.md).

## Build & Deployment

Die Website wird als statisches Bundle gebaut und von nginx ausgeliefert (Multi-Stage-`Dockerfile`, Target `prod`). Das Image wird per GitHub Actions nach GHCR gepusht (`ghcr.io/kahalm/lehrplan-at:latest`).

```bash
docker compose up -d        # zieht :latest, Website auf http://localhost:8088
```

## Zugriffslogging → Elasticsearch

Jeder Website-Aufruf wird protokolliert und in den gemeinsamen Lehrplan-Index des zentralen ES-Stacks geschickt – denselben, in den auch die `lernkompass`-API ihre lesenden Lehrplan-Zugriffe schreibt.

**Aufbau:**
- `nginx.conf` schreibt ein **JSON-Zugriffslog** (`log_format json_lehrplan`) nach `/var/log/nginx/access.json`. Feldnamen tragen das Präfix `nginx_`, um Mapping-Konflikte mit den ECS-Feldern der Serilog-Sink zu vermeiden.
- Ein **Fluent-Bit-Sidecar** (`fluent-bit/`) tailt diese Datei (geteiltes Volume `nginx-logs`) und schreibt jeden Eintrag nach `<ELASTICSEARCH_LEHRPLAN_INDEX>-web` (z.B. `lehrplan-prod-web`). Marker: `Quelle=Website`, `LogType=LehrplanZugriff`.

**Konfiguration** (Env-Vars in `docker-compose.yml`):

| Variable | Default | Zweck |
|----------|---------|-------|
| `ELASTICSEARCH_HOST` | `10.24.13.6` | ES-Host |
| `ELASTICSEARCH_PORT` | `9200` | ES-Port |
| `ELASTICSEARCH_LEHRPLAN_INDEX` | `lehrplan-prod` | Basisname; Fluent Bit schreibt nach `<wert>-web` |
| `APP_ENV` | `prod` | Umgebungs-Label |

**Abfragen:** Website- (`lehrplan-prod-web`) und API-Zugriffe (Data-Stream `lehrplan-prod-generic-default`) sind gemeinsam über das Index-Pattern **`lehrplan-prod*`** abfragbar. Der Wert von `ELASTICSEARCH_LEHRPLAN_INDEX` muss mit dem der `lernkompass`-API übereinstimmen.

> Hinweis: Der `lehrplan-prod-web`-Index hat keine Rollover-/ILM-Politik. Bei Bedarf später ILM oder tagesbasierte Indizes (`Logstash_Format`) ergänzen.
