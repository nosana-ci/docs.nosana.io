# Nosana Token <Badge type="tip" text="mainnet" vertical="middle" />

NOS is the native token of the Nosana Network. In exchange for NOS tokens, 
you can use our network to run CI/CD for all your development projects.

## Info

| Description   | type                                                                                                                             |
|---------------|----------------------------------------------------------------------------------------------------------------------------------|
| Type          | [SPL Token](https://spl.solana.com/token)                                                                                        |
| Standard      | [Fungible](https://docs.metaplex.com/programs/token-metadata/token-standard#the-fungible-standard)                               |
| Ticker        | `NOS`                                                                                                                            |
| Total Supply  | `100,000,000` tokens                                                                                                             |
| Token Address | [`nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7`](https://explorer.solana.com/address/nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7) |

## Token Distribution

Tokens are distributed over 7 main pools.
These are the Public Sale tokens, Airdrop tokens, Liquidity tokens, Team tokens, Company tokens, Mining tokens,
and the Backers tokens.

::: chart Polar Chart
```json
{
  "type": "polarArea",
  "data": {
    "labels": ["Public Sale", "Airdrop", "Liquidity", "Team", "Company", "Mining", "Backers"],
    "datasets": [
      {
        "label": "Nosana Token Distribution",
        "data": [3, 5, 10, 20, 25, 20, 17],
        "backgroundColor": ["#000000", "#5C2983", "#F76700", "#21B372", "#FDDE02", "#0076C5", "#D30018"]
      }
    ]
  }
}
```
:::

### Public Sale tokens

Public Sale tokens can be retrieved through our Public Sale event.

::: tip Specs
Public Sale tokens account for 3% of the total number of NOS tokens. These tokens are available at token distribution.
:::

### Airdrop tokens

Airdrop tokens can be retrieved through our Incentivized Testnet program.

::: tip Specs
Airdrop tokens account for 5% of the total number of NOS tokens. These tokens are available at token distribution.
:::

### Mining tokens

Mining tokens are earned by nodes that execute Nosana CI pipelines. The mining pool is a significant portion of the total supply, and capped to 20,000,000 tokens.

::: tip Specs
Mining tokens account for 20% of the total number of NOS tokens. The tokens are released in a linear fashion over a period of 24 months (2 years), beginning at token distribution.
:::

### Team tokens

Team tokens are reserved for the team.

::: tip Specs
Team tokens account for 20% of the total number of NOS tokens. The tokens are released in a linear fashion over a period of 48 months (4 years), beginning at token distribution.
:::

### Liquidity tokens

Liquidity tokens are used for trading pools.

::: tip Specs
Liquidity tokens account for 10% of the total number of NOS tokens. These tokens are available at token distribution.
:::

### Company tokens

Company tokens are reserved for the development of the Nosana platform. The tokens will be used to either of the following purposes:

Marketing
Advisors
Engineering
Business Development

::: tip Specs
Company tokens account for 25% of the total number of NOS tokens. The tokens are released in a linear fashion over a period of 36 months (3 years), beginning at token distribution. At token distribution, 10% of this pool is directly released.
:::

### Backers tokens

Backers tokens can be acquired through the private sale.

::: tip Specs
Backers tokens account for 17% of the total number of NOS tokens. The tokens are released in a linear fashion over a period of 9 months (0.75 years), beginning at token distribution. At token distribution, 10% of this pool is directly released.
:::
