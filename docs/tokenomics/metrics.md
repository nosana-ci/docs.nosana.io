---
title: Metrics
---

# Token Metrics

|Info||
| --- | --- |
| Type | SPL Token |
| Ticker | `NOS` |
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

Incentivized Testnet tokens take up 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Airdrop' ).total * 100 }}% 
of the total amount of `NOS` token.
These tokens are available at token distribution.

### CI/CD mining pool

In the CI/CD mining pool will lay 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Mining' ).total * 100 }}% 
of the total amount of `NOS` token.
These are linearly released over
{{ $var.tokenDistribution.find( ({ name }) => name === 'Mining' ).vesting }}
months (
{{ $var.tokenDistribution.find( ({ name }) => name === 'Mining' ).vesting / 12 }} years
), starting at token distribution.

### Team tokens

The team tokens take up 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Team' ).total * 100 }}% 
of the total amount of `NOS` token.
These are linearly released over
{{ $var.tokenDistribution.find( ({ name }) => name === 'Team' ).vesting }}
months (
{{ $var.tokenDistribution.find( ({ name }) => name === 'Team' ).vesting / 12 }} years
), starting at token distribution.

### Company tokens

Company tokens take up 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Company' ).total * 100 }}%
of the total amount of `NOS` token.
{{ $var.tokenDistribution.find( ({ name }) => name === 'Company' ).upfront * 100 }}%
released at token distribution, then linearly released over
{{ $var.tokenDistribution.find( ({ name }) => name === 'Company' ).vesting }}
months (
{{ $var.tokenDistribution.find( ({ name }) => name === 'Company' ).vesting / 12 }} 
years ).

### Sale tokens

Backer tokens take up 
{{ $var.tokenDistribution.find( ({ name }) => name === 'Backers' ).total * 100 }}%
of the total amount of `NOS` token.
{{ $var.tokenDistribution.find( ({ name }) => name === 'Backers' ).upfront * 100 }}%
released at token distribution, then linearly released over
{{ $var.tokenDistribution.find( ({ name }) => name === 'Backers' ).vesting }}
months (
{{ $var.tokenDistribution.find( ({ name }) => name === 'Backers' ).vesting / 12 }}
years ).

### DAO tokens

Backer tokens take up 
{{ $var.tokenDistribution.find( ({ name }) => name === 'DAO' ).total * 100 }}% 
of the total amount of `NOS` token.
These are fully locked for 
{{ $var.tokenDistribution.find( ({ name }) => name === 'DAO' ).lock }}
months, then linearly released over
{{ $var.tokenDistribution.find( ({ name }) => name === 'DAO' ).vesting }}
months (
{{ $var.tokenDistribution.find( ({ name }) => name === 'DAO' ).vesting / 12 }}
years ).

## Release Timeline

All tokens are released over a 4-year period. 
The below chart shows how the different pools grow over this period.

<ReleaseTimeline/>
