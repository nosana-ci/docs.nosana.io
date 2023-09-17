# Docker Node

This guide will help you run a Nosana Node for Docker workloads.

Requirements:

- MacOS or Linux
- Docker or Podman
- Homebrew or Linuxbrew
- Solana Keypair at `~/.config/solana/id.json`
- Some SOL for paying transactions
- Staked $NOS (https://app.nosana.io/stake)
- Pinata JWT

## Running Podman

The Nosana Node uses rootless Podman to manage its containers. Communication happens over Podman's HTTP server. If you have Podman installed on your machine you can start the podman server on port 8080 with:

```
podman system service --time 0 tcp:0.0.0.0:8080
```

If you have Docker installed, the easiest way to start a Podman server is inside a container:

```
docker run -d \
  --name podman \
  --device /dev/fuse \
  --privileged \
  --user 1000:1000 \
  -p 8080:8080 \
  nosana/podman:v1.0.20 podman system service \
  --time 0 tcp:0.0.0.0:8080
```

Now verify that Podman is running correctly:

```
curl http://localhost:8080/v4.5.0/libpod/info
```

## Installing the Nosana Node

The Nosana Node can be installed with Homebrew (on macOS) or Linuxbrew:

```
brew install nosana-ci/tools/nosana-node
nosana-node --help
```

Alternatively you can run the node inside a Docker container:

```
docker run --network host -it \
  -v ~/.config/solana/id.json:/root/.config/solana/id.json \
  nosana/nosana-node \
  nosana-node --help
```

We expose the host network to the container so that it can reach the Podman HTTP endpoint. We also pass the Node's key pair to the container.

## Running the Node

There are several configuration values we must pass to the node. Firstly, we must add our Pinata JWT to the environment:

```
export PINATA_JWT="your-logn-jwt-value-here"
```

The other configurations can be passed as CLI arguments:

- `--market`: the market to join
- `--network`: we will use `devnet`
- `--podman`: the URL of the podman API

If we run the node inside Docker, the $PINATA_JWT variable must also be passed through. The final command looks something like this:

```
docker run --network host -it \
  -v ~/.config/solana/id.json:/root/.config/solana/id.json \
  -e "PINATA_JWT=${PINATA_JWT}" \
  nosana/nosana-node \
  nosana-node \
  --market 7nxXoihx65yRGZiGzWZsFMz8D7qwxFePNKvDBWZnxc41 \
  --network devnet \
  --podman http://localhost:8080 \
  start
```

This should show you a table with the node start up configuration.

After a while, the Node will try to join the market and wait for jobs, which will be visible in the console.

## Stopping the node

When you stop the node with SIGINT (Ctrl-C) it will gracefully shut down and exit the market.
