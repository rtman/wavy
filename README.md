[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
# Wavy

Wavy is a monorepo that is managed using `lerna`, in order to run it you have to have `lerna`, `docker desktop`, `node` and `npm`/`yarn` installed.

## Running
1. Clone the repo
2. Acquire the `.env-cmdrc.json` from the project owner and place in the root dir. 
3. Run `lerna bootstrap` in the root dir
4. Start docker desktop and run `docker-compose up` (still in the root). That should start up the backend.
5. To Run the web front end, in another terminal go to `/packages/web` and run `yarn start`

# Troubleshooting

If you have issues with docker, it can be necessary to rebuild the docker images. Run `docker-compose down` and `docker-compose build` to re build the images, `docker-compose up` to restart the containers.
If that doesnt work run `docker system prune --volumes` to completely wipe all docker cached images/volumes and then run `docker-compose up`. Shoudl fix it.
