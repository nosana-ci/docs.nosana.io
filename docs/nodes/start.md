# Getting Started

The Nosana Node is the software that you run to connect your hardware to
the Grid in order to start earning $NOS tokens.

This guide is aimed at the early pioneers that want to experiment with their hardware.

::: warning

At the moment the Nosana Node is in pre-release. Nodes should only be experimented with on sandboxed hardware with throwaway key pairs. If you are looking to earn stable earnings on your hardware, we recommend you to wait until the release of V1.

:::

## Node Flavors

There are two flavors of the Nosana Node that target different runtimes. The most evolved node is capable of running Docker container workloads on Linux machines. It is referred to as the _docker-node_. The second flavor is called the _wasm-node_ and can run WASM and WebGPU workloads while running in a web browser.

## Selecting a Market

The Grid is organized in markets, and each Market targets a specific group of hardware. You will need to find a market that matches your hardware. This is an incomplete list of available markets, which are in active development and will change frequently:


**CPU markets**
| Specs                        | Node   | Market                                                                                            |
|------------------------------|--------|---------------------------------------------------------------------------------------------------|
| x86, 8GB RAM, 2 vCPu, Podman | docker | [AdEfJD...EMQNWy](http://explorer.nosana.io/markets/AdEfJDEqWWbNwRtS3SU3JXfo5oSKVnbmK2r8gqEMQNWy) |
| x86, 8GB RAM, 2 vCPu, Podman | docker | [DRPaN6...ChE6GE](http://explorer.nosana.io/markets/DRPaN6jp27usGHqtjnBSq412QdrfkMf3ow9wFjChE6GE) |


**GPU markets**
| Specs                          | Node         | Market      |
|--------------------------------|--------------|-------------|
| Apple M2 Max 38-Core           | wasm, docker | _coming soon_ |
| Apple M2 Pro 19-Core           | wasm, docker | _coming soon_ |
| NVIDIA GeForce RTX 4090 Mobile | wasm, docker | _coming soon_ |
| NVIDIA GeForce RTX 4070 Mobile | wasm, docker | _coming soon_ |
| AMD Radeon RX 7900 XTX         | wasm, docker | _coming soon_ |
| NVIDIA GeForce RTX 4090        | wasm, docker | _coming soon_ |
| NVIDIA GeForce RTX 4070        | wasm, docker | _coming soon_ |
| NVIDIA GeForce RTX 3080        | wasm, docker | _coming soon_ |

When you start your Node it will try to select the most suitable market for your hardware.

## Getting an Access Key

Some markets are protected by an access key, which can be seen in the Explorer. This is a Solana NFT that you must have in order to join the market. Currently, all paid markets require a Nosana Burner Phone NFT to join. We recommend to first run your Node on a free market.

## Staking Tokens and Commitment

Every node must stake a minimum amount of $NOS before they can join a market. The required stake per market can be found in the Explorer. For a free market the minimum stake will be sufficient, so head over to http://app.nosana.io/stake to make sure you have something staked.

When your Node accepts a job it is committing to finishing it. This means you are not allowed to shut down your machine or quit the Node software while a job is running. Currently there is no penalty for doing so, but in the future you will risk losing part of your staked tokens.

## Setting up Pinata

Some core data in the Grid is communicated through IPFS. Nosana is in the process of setting up a dedicated IPFS cluster that is free for Nodes to use, but until that is ready, Nodes are required to register with Pinata for an API key.

You can get a Pinata JWT by signing up for a free account at [Pinata](https://pinata.cloud/).  After you have registered you can get your JWT by going to your [Pinata Keys](https://app.pinata.cloud/keys) and clicking on the "New Key" tab. Browse through the dropdown menus to find the checkbox with `pinJSONToIPFS`, check it. Give your new API Key a name and Click on "Create Key" and you will be presented with your Pinata JWT. Copy this JWT and save it somewhere safe. We will be using it in a bit.

## Running the Node

Now that we have the basics setup, we are ready to run the Node server:

- [Getting Started with the Docker Node]()
- Getting Started with the Web-based Node (coming soon)
