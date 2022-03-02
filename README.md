
# ShamTool Maps DB

Back-end stack for the Maps DB API of ShamTool.

## Running

The project supports running with [Docker](https://www.docker.com/) and Docker Compose.

```bash
# Production
docker compose up -d --build --remove-orphans

# Local environment
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build --remove-orphans
```
