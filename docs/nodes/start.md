# Getting Started

![Nosana](https://nosana.io/img/Nosana_Logo_vertical_color_white.svg)

Join us in creating the decentralized future of CI/CD! Our passion is helping open source communities to build better software faster and more efficiently.
Open source software is developed out in the open, so why wouldn't you use an open source CI/CD tool?

---

Welcome to the Nosana Node documentation.
Here you will learn everything that you need to know to get up and started with a Nosana Node.
Nosana Nodes are key to running the Nosana Network.
Without the nodes we have no network.
What ever your reason is to run a node and there are a couple such as:

- You want to earn NOS tokens
- You want to run pipelines and donate a pipeline to your favorite opensource project
- You want to contribute to a decentralized docker engine
- You want to be part of a resilient and reliable network to power the next crowd computing platform.

This is the easy way to get started.

## QuickStart

In this quickstart guide will operate with the following assumptions:

- Your Nosana Node will be operating on [Nosana Devnet](https://devnet.nosana.io) (Which runs on [Solana Devnet](https://docs.solana.com/clusters#devnet)).
- Your Nosana Node will be running on the [0 NOS Nosana Market](https://devnet.nosana.io/markets/8fAB6xNLwQXDGUhoPtzeaJtppDvPA3VM7Fqb8xXnYhZM).

These assumptions are made in order to get you up and running as quickly as possible, without the need to setup your node with NOS tokens and a Nosana NFT.

Now that we have the assumptions out of the way, we need to take care of some prerequisites.

### Docker

The first one is to make sure Docker installed and the proper priviliges set.
Right now, these instructions will only work on macOS and Linux; maybe, WSL should work but has not been tested.

Make sure you have Docker installed and that it is added to its own user group. Please follow these links to install and setup Docker:

- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Manage Docker as a non-root user.](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

This will make sure that we can spin up the Nosana Node without any root priviliges.

<!-- ### Pinata JWT

The second one is to get a Pinata JWT. This is needed to upload the results of the pipelines to IPFS.
You can get a Pinata JWT by signing up for a free account at [Pinata](https://pinata.cloud/).
After you have registered your account, you can get your Pinata JWT by going to your [Pinata Keys](https://app.pinata.cloud/keys) and clicking on the "New Key" tab. Browse through the dropdown menus to find the checkbox with `pinJSONToIPFS`, check it. Give your new API Key a name and Click on "Create Key" and you will be presented with your Pinata JWT. Copy this JWT and save it somewhere safe. We will be using it in a bit.

Now that we have the prerequisites out of the way, we can start setting up our Nosana Node. -->

### Nosana Install Script

You will be able to run this one command in your command line and you will have a Nosana Node running on your machine.

```bash
curl -fsSL https://nosana.io/quickstart.sh | bash
```

Note that this script requires the requirements mentioned above, it is configured to run in such a way that it does not require sudo.
You should never run any script from the internet with sudo priviliges without double checking it.
Even in this situation, do double check the script before running it on your box.
You can read it here: [https://nosana.io/quickstart.sh](https://nosana.io/quickstart.sh)
