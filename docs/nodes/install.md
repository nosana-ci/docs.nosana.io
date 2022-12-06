# Node Installation

This guide is a deep dive in to how to get a Nosana Node running with your own configuration.
The first part will focus on how to run the Node using Docker, and the second part will focus on running the Node via a Clojure Repl.

More information can be found at our [GitHub](https://github.com/nosana-ci/nosana-node)

## Development

Development happens primarily on Linux and macOS. So this guide will focus on those platforms. We will add Windows later on when we have a Windows version of Nosana. Stay tuned for the announcement soon!

## Requirements

You will need to install the following to get started with a Nosana Node:

- [Solana Tools Suite (Required)](https://docs.solana.com/cli/install-solana-cli-tools)
- [Docker (Required)](https://docs.docker.com/desktop/linux/install/)
- [JVM (Optional - Required for development build)](https://openjdk.org/install/)
- [Clojure (Optional - Required for development build)](https://clojure.org/guides/install_clojure)

### IPFS

Depending if you are going to use Pinata, you can roll with your own IPFS provider.
- [Pinata API keys (Optional)](https://docs.pinata.cloud/)

### Checking everything works

Afterward, you want to quickly check that everything is working correctly, so spin up a terminal and run the following commands:

```bash
docker --version

solana --version

java --version

clj --version

# Check that IPFS is running
curl <yourIpfsServer>
```

After checking that everything is working correctly, you can start setting up your Solana keys to authenticate your node to the network.

## Solana Keys

You can generate a new Solana keypair on your matching by running the following command. It will create a new key at `~/.config/solana/id.json`:

```bash
solana-keygen new
```

If you already have a Solana keypair that you want to use please take a look at the [Solana Wallet guide](https://docs.solana.com/wallet-guide/paper-wallet#public-key-derivation) for more information on how to import your keys.

## Fund your node

To start accepting jobs, you will need to fund your node. This is needed because the node will need to make transactions, and transactions require `SOL`.

### Quick and easy

The quick and easy way to fund your account is to use the `solana airdrop` command. You can pass in the `devnet` parameter to airdrop `SOL` via `devnet`.

```bash
solana airdrop 1 -u devnet
```

### Online faucet

Retrieve your address by running the following command.

```bash
solana-keygen pubkey
```

With the output from that, you can fund your Solana address from an online faucet such as these:

- [https://solfaucet.com/](https://solfaucet.com/)

## Containers

### Docker-Info

If you are using Docker, you will need to set up the Docker to run as a non-root user.
[Manage Docker as non-root user](https://docs.docker.com/engine/install/linux-postinstall/)

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```
<!-- sudo systemctl restart docker -->
You might need to log out and log back in for the new group to be recognized.

### Podman

Now that you have the correct privileges set, you can run your first Container: Podman. This will run in the background, while the Nosana Node connects to it and run your containers inside of it.

Run the following command to start Podman in the background.

```bash
docker run -d \
  --name podman \
  --device /dev/fuse \
  --security-opt seccomp=unconfined \
  --security-opt apparmor=unconfined \
  --security-opt label=disable \
  --cap-add sys_admin \
  --cap-add mknod \
  -p 8080:8080 \
  quay.io/podman/stable podman system service \
  --time 0 tcp:0.0.0.0:8080
```

The first time you run this, it will pull the Podman image. Podman will be used to spin up containers for Nosana jobs.

After Podman is up and running in the background, you can run the node. You will first need to check what the address is of Podman.

### Running Nosana Node with Docker

The recommended way to run the Nosana-Node is to run it inside of Docker.
That way it will get daemonized and it can run in the background without you having to take care of it.

```bash
docker run --rm -d \
  --name nosana-node \
  -p 3000:3000 \
  -e "SOLANA_NETWORK=<devnet / mainnet>" \
  -e "SOLANA_PRIVATE_KEY=$(< ~/.config/solana/id.json)" \
  -e "NOSANA_MARKET=<NosanaMarket>" \
  -e "NOSANA_NFT=<OptionalNosNft>" \
  -e "PINATA_JWT=<PinataJwt>" \
  nosana/nosana-node:latest
```

To view the status of the Nosana Node you can run the following command to see what's happening inside:

```bash
docker logs -f nosana-node
```

## Development Build

If you want to help with development, it is also easy to get up and started by running a development build. Please follow along with the short guide on how to do so.

### Clone the repo

If you are cloning the repo for the first time, you'll need to clone the repo recursively, to retrieve `solanaj`.

```bash
git clone --recursive https://github.com/nosana-ci/nosana-node
```

If you've already cloned the repo, you can use the `submodule` subcommand:

```bash
git clone https://github.com/nosana-ci/nosana-node
cd nosana-node
git submodule init
git submodule update
```

This will pull in any updates from other recursive repos associated with the Nosana-Node.

### Build

You will need to use the following command to compile the `solanaj` dependency.

```bash
clj -T:build compile
```

### Docker

This command will build a Docker container and import it to your local Docker
daemon as `nos/node`:

```bash
clj -T:container "$(< jib-local.edn)"
```

### Configure

When running a node from the repl, you will need the following configuration file in the root of your home folder (`~/.nosana-node-config.edn`):

```clj
;; ~/.nosana-node-config.edn
 {
  :nft               "<OptionalNosNft>"
  :pinata-jwt        "<YourPinataJWT>"
  :solana-network    "<devnet / mainnet>"
  :nosana-market     "<Nosana Market>"
}

```

### Running

Now you can finally run the repl:

```bash
clj -M:dev -r
```

From here you can run the following commands for the node to start in their market.

```clj
user=> (go)
user=> (start-work-loop!)
```
