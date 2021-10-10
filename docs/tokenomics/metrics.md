---
title: Token Metrics
date: 2021-08-25
tags:
- nosana
- tokens
---

|Info||
| --- | --- |
| Type | SPL Token |
| Ticker |  {{ $var.ticker }} |
| Total supply | {{ $var.totalSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} |
| Token contract | *tbd* |

## Token Distribution

Tokens are distributed over {{ $var.tokenDistribution.length }} main pools.
These are the
<span v-for="(pool, index) in $var.tokenDistribution">
<span v-if="index < $var.tokenDistribution.length - 1"><a :href="'#' + pool.name.toLowerCase().replace(' ', '-') + '-tokens'">{{ pool.name }} tokens</a>, </span>
<span v-else> and the <a :href="'#' + pool.name.toLowerCase() + '-tokens'">{{ pool.name }} tokens</a>.</span>
</span>

<TokenDistribution/>

### Public Sale tokens

Public Sale tokens can be retrieved through our Public Sale event.

::: tip
<TokenDescription pool='Public Sale'/>
:::

### Airdrop tokens

Airdrop tokens can be retrieved through our Incentivized Testnet program.

::: tip
<TokenDescription pool='Airdrop'/>
:::

### Mining tokens

Mining tokens can be acquired by nodes that help run the Nosana pipelines.
The mining pool is a significant portion of the total supply, and capped to
{{ ($var.tokenDistribution.find( ({ name }) => name === 'Mining' ).total * $var.totalSupply).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
tokens.
The pools' purpose is to kickstart the network and help onboard open source software projects with appealing rates.

::: tip
<TokenDescription pool='Mining'/>
:::

### Team tokens

Team tokens are reserved for the founders of the Nosana project and its Foundation.

::: tip
<TokenDescription pool='Team'/>
:::

### Liquidity tokens

Liquidity tokens are used for trading pools.

::: tip
<TokenDescription pool='Liquidity'/>
:::

### Company tokens

Company tokens are used to bring Nosana to a self-sustaining platform.
The tokens will be used to either of the following purposes:

- Marketing
- Advisors
- Engineering
- Business Development

::: tip
<TokenDescription pool='Company'/>
:::

### Backers tokens

Backers tokens can be acquired through the private sale.

::: tip
<TokenDescription pool='Backers'/>
:::

## Release Timeline

All tokens are released over a 4-year period.
The below chart shows how the different pools grow over this period.

<ReleaseTimeline/>
