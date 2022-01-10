---
title: Nosana Incentivized Testnet
date: 2021-06-12
tags:
- nosana
- testing
---

<Badge text="beta"/>

Nosana will enter [Solana Testnet](https://docs.solana.com/clusters#testnet) with her Incentivized Testnet program.

The Testnet program is intended to test Nosana's CI features and tools, before going to Mainnet.
Projects that participate the Incentivized Testnet program will be able to acquire <strong>{{ $var.ticker }}</strong> tokens.
A total of
{{ ($var.tokenDistribution.find( ({ name }) => name === 'Airdrop' ).total * $var.totalSupply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
<strong>{{ $var.ticker }}</strong> tokens are available for giveaway to participants in the Testnet Program.

[Registration for the Incentivized Testnet is available here.](https://docs.google.com/forms/d/e/1FAIpQLSfZ8lKQv_2L5ngsFhCfGO39EzQCuUEs7RFwQICf32zr7xAbQQ/viewform)

[comment]: <> (add link to google forms)

## Airdrop

Because the Testnet ledger can be reset. Tokens are distributed via Airdrop on
[Solana Mainnet](https://docs.solana.com/clusters#mainnet-beta), on a frequent basis.
<strong>{{ $var.ticker }}</strong> tokens from the Airdrop will be programmatically locked
up until the official token release.
Participants will not be able trade, sell, or otherwise move <strong>{{ $var.ticker }}</strong> tokens received
in connection with the Testnet Program, up until the official token release and exchange listings.

### Open source projects

Open source software projects are Incentivized based on their Nosana network usage.
In other words, participants will receive tokens for running pipelines.
All participant will receive a limited amount of Testnet tokens.
These tokens can only be used to run Nosana pipelines, and cannot be traded.
The address on Testnet will be different from the actual <strong>{{ $var.ticker }}</strong> token on Mainnet,
hence the Mainnet tokens will be sent via Airdrop to participants registered Mainnet address.

$\sum_{os} NOS_{airdrop} = NOS_{jobs} \forall n \in \mathbb N_{pipelines}$

::: tip
Participants will receive tokens for running free pipelines !
:::

### Nodes

Nodes in the Testnet network will also be able to earn rewards.
Rewards are calculated based on pipeline seconds and resources capacity.

$\sum_{node} NOS_{airdrop} = NOS_{jobs} \forall n \times x_{cpu} y_{memory} z_{seconds} \in \mathbb N_{pipelines}$
