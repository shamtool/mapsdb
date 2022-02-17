
# Maps

Main maps microservice to the Maps DB API.

## Running

The project supports running with [Docker](https://www.docker.com/) and Docker Compose.

### Local

You may find yourself needing to run this service independently of the stack for debugging purposes. It is recommended to run with `docker-compose.local` and stop the equivalent service.

After cloning the repository and installing dependencies with `pnpm install`, create an `.env` file with the required credentials. Finally, start the server:

```bash
# local debug mode
pnpm run start:local
```
