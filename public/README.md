
# Public

Public REST gateway to the Maps DB API.

## Running

The project supports running with [Docker](https://www.docker.com/) and Docker Compose.

### Local

As the project is tightly integrated with other services defined by the Docker configuration file, the recommended and supported way to debug this project locally is through Docker Compose file `docker-compose.local`. Refer to the root monorepo to find out how to run locally.

A code watcher is built in to watch changes made in your local environment, and does hot reloading within the container when needed.

### Running independently (Unsupported)

However, if you still insist on running this service independently of the stack for debugging purposes, it is recommended to run with `docker-compose.local` and to stop the relevant service.

```bash
# local debug mode
pnpm run start:local
```
