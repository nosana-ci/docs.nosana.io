---
title: Metrics
---

# Token Metrics

|Info||
| --- | --- |
| Type | SPL Token |
| Ticker |  {{ $var.ticker }} |
| Total supply | {{ $var.totalSupply }} |
| Token contract | *tbd* |

## Token Distribution

Tokens are distributed over {{ $var.tokenDistribution.length }} main pools. 
These are the 
[CI/CD mining pool](#ci-cd-mining-pool),
[Airdrop tokens](#airdrop-tokens),
[Team tokens](#team-tokens), 
[Company tokens](#company-tokens), 
[Sale tokens](#sale-tokens), and the
[DAO tokens](#dao-tokens).

<TokenDistribution/>

### Airdrop tokens

<TokenDescription pool='Airdrop'/>

Airdrop tokens can be retrieved through our Incentived Tesnet program.

### CI/CD mining pool

<TokenDescription pool='Mining'/>

CI/CD mining tokens can be acquired by nodes that help run the Nosana pipelines.
The mining pool is a significant portion of the total supply, and capped to 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Mining' ).total * $var.totalSupply }}
tokens. 
The pool's purpose is to kickstart the network and help onboard open source software projects with appealing rates.  

### Team tokens

<TokenDescription pool='Team'/>

Team tokens are reserved for founders of the Nosana project and its foundation.

### Company tokens

<TokenDescription pool='Company'/>

Company tokens are used to bring Nosana to a self-sustaining platform. 
The tokens will be used to either of the following purposes:

- Marketing
- Liquidity
- Advisors
- Engineering
- Business Development

### Backers tokens

<TokenDescription pool='Backers'/>

Airdrop tokens can be acquired through the private sale.

### DAO tokens

<TokenDescription pool='DAO'/>

DAO tokens are used to govern Nosana decentralized.
The tokens will be used to either of the following purposes:

- Proposal rewards
- Staking rewards
- Rewards for platform development efforts

## Release Timeline

All tokens are released over a 4-year period. 
The below chart shows how the different pools grow over this period.

<ReleaseTimeline/>
