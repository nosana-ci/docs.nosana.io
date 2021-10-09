---
title: Token Utility
date: 2021-08-29
tags:
- nosana
- tokens
---

## Transactions

Nosana CI is an open marketplace for CI/CD.
This means you can earn tokens by sharing your compute resources,
or use your tokens to retrieve compute on demand.

The core token utility is around the exchange between CI/CD artifacts and the <strong>{{ $var.ticker }}</strong> token.
Once Nosana nodes have run pipeline jobs, the initiator will transfer staked <strong>{{ $var.ticker }}</strong> tokens
in exchange for these results.

## Mining

Mining tokens can be acquired by nodes that help run the Nosana pipelines.
Nosana will host Community Nodes to run pipelines. In addition, anybody is able to join
the network by sharing their compute resources. These can be machines ranging from
Raspberry Pi's, smartphones, laptops, desktops PCs, as well as full-blown server racks.

## Staking

Reputation is build based on verified pipelines run by any identity on the network.
Staked tokens can be used to increase reputation so that malicious nodes can be
slashes in case of unwanted behaviour.

@flowstart
os=>parallel: Software Project
git=>operation: Code Commit
ci=>parallel: Nosana CI nodes
art=>inputoutput: CI artifacts
sc=>operation: Smart Contract (SPL)
tx=>end: Transaction

os(path1, bottom)->git->ci(path1, bottom)->art->tx
os(path2, right)->sc
ci(path2, right)->sc->tx(left)->ci
@flowend
