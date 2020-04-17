# groov (Temp name)

Groov is a monorepo, in order to run it you have to have `docker desktop`, `node` and `npm`/`yarn` installed.

After cloning the repo just run `yarn` in the root dir, start docker desktop and run `docker-compose up` (still in the root). That should start up the backend.

To Run the web front end, in another terminal go to `/packages/web` and run `yarn start`

# Troubleshooting

If you have issues with docker, it can be necessary to rebuild the docker images. Run `docker-compose down` and `docker-compose build` to re build the images, `docker-compose up` to restart the containers.
If that doesnt work run `docker system prune --volumes` to completely wipe all docker cached images/volumes and then run `docker-compose up`. Shoudl fix it.