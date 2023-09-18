# Docker Node

This guide is designed to provide you with the information needed to successfully run a Nosana Node with Docker. With this guide, you will be able to deploy and manage Nosana containers in a secure and efficient manner. It will provide instructions on how to set up and configure the Nosana Node, as well as tips and best practices for managing Docker workloads.

## Requirements

In order to run a Nosana Node, there are a few prerequisites that must be met.

- MacOS or Linux operating system
- [Homebrew](https://brew.sh/) if on MacOS or [Linuxbrew](https://docs.brew.sh/Homebrew-on-Linux) when on Linux.
- [Docker](https://www.docker.com/)
  - Optional: [Podman](https://podman.io/)
- Solana Keypair at `~/.config/solana/id.json`, with:
  - Some `$SOL` for paying transactions
  - Staked `$NOS` (https://app.nosana.io/stake)
- [Pinata](https://www.pinata.cloud/) JWT token

## Running Podman

The Nosana Node uses rootless Podman to manage its containers. Communication happens over Podman's HTTP server. If you have Podman installed on your machine you can start the podman server on port 8080 with:

```shell
podman system service --time 0 tcp:0.0.0.0:8080
```

If you have Docker installed, the easiest way to start a Podman server is inside a container:

```shell
docker run \
  --detach \
  --name podman \
  --device /dev/fuse \
  --privileged \
  --user 1000:1000 \
  --port 8080:8080 \
  nosana/podman:v1.0.20 \
    podman system service --time 0 tcp:0.0.0.0:8080
```

Now verify that Podman is running correctly:

```shell
curl http://localhost:8080/v4.5.0/libpod/info
```

## Installing the Nosana Node

The Nosana Node can be installed with Homebrew (on macOS) or Linuxbrew:

```shell
brew install nosana-ci/tools/nosana-node
nosana-node --help
```

Alternatively you can run the node inside a Docker container:

```shell
docker run \
  --network host \
  --interactive \
  -v ~/.config/solana/id.json:/root/.config/solana/id.json \
  nosana/nosana-node \
    nosana-node --help
```

We expose the host network to the container so that it can reach the Podman HTTP endpoint. We also pass the Node's key pair to the container.

## Running the Node

There are several configuration values we must pass to the node. Firstly, we must add our Pinata JWT to the environment:

```shell
export PINATA_JWT="your-logn-jwt-value-here"
```

The other configurations can be passed as CLI arguments:

- `--market`: the market to join
- `--network`: we will use `devnet`
- `--podman`: the URL of the podman API

If we run the node inside Docker, the `$PINATA_JWT` variable must also be passed through. The final command looks something like this:

```shell
docker run \
  --network host \
  --interactive \
  --volume ~/.config/solana/id.json:/root/.config/solana/id.json \
  --env PINATA_JWT \
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

When you stop the node with `SIGINT` (Ctrl-C) it will gracefully shut down and exit the market.
