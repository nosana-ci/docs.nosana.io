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

::: chart Distribution Chart
```json
{
  "type": "polarArea",
  "data": {
    "labels": ["Public Sale", "Airdrop", "Liquidity", "Team", "Company", "Mining", "Backers"],
    "datasets": [
      {
        "label": "Nosana Token Distribution",
        "data": [3e6, 5e6, 10e6, 20e6, 25e6, 20e6, 17e6],
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

## Release Timeline

::: chart Release Chart
```json
{
  "type": "line",
  "options": {
    "scales": {
      "y": {
        "stacked": true
      }
    }
  },
  "data": {
    "labels": ["17-1-2022","17-2-2022","17-3-2022","17-4-2022","17-5-2022","17-6-2022","17-7-2022","17-8-2022","17-9-2022","17-10-2022","17-11-2022","17-12-2022","17-1-2023","17-2-2023","17-3-2023","17-4-2023","17-5-2023","17-6-2023","17-7-2023","17-8-2023","17-9-2023","17-10-2023","17-11-2023","17-12-2023","17-1-2024","17-2-2024","17-3-2024","17-4-2024","17-5-2024","17-6-2024","17-7-2024","17-8-2024","17-9-2024","17-10-2024","17-11-2024","17-12-2024","17-1-2025","17-2-2025","17-3-2025","17-4-2025","17-5-2025","17-6-2025","17-7-2025","17-8-2025","17-9-2025","17-10-2025","17-11-2025","17-12-2025","17-1-2026"],
    "datasets": [
      {
        "label": "Public Sale",
        "data": [30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000,30000000],
        "fill": true,
        "borderColor": "#000000",
        "tension": 0.1
      },
      {
        "label": "Airdrop",
        "data": [50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000,50000000],
        "fill": true,
        "borderColor": "#5C2983",
        "tension": 0.1
      },
      {
        "label": "Liquidity",
        "data": [100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000,100000000],
        "fill": true,
        "borderColor": "#F76700",
        "tension": 0.1
      },
      {
        "label": "Team",
        "data": [0,4166666.6666666665,8333333.333333333,12500000.000000002,16666666.666666666,20833333.333333332,25000000.000000004,29166666.66666667,33333333.333333332,37500000,41666666.666666664,45833333.333333336,50000000.00000001,54166666.66666667,58333333.33333334,62500000,66666666.666666664,70833333.33333334,75000000,79166666.66666667,83333333.33333333,87500000.00000001,91666666.66666667,95833333.33333334,100000000.00000001,104166666.66666667,108333333.33333334,112500000,116666666.66666669,120833333.33333334,125000000,129166666.66666669,133333333.33333333,137500000,141666666.6666667,145833333.33333334,150000000,154166666.6666667,158333333.33333334,162500000,166666666.66666666,170833333.33333337,175000000.00000003,179166666.66666666,183333333.33333334,187500000,191666666.6666667,195833333.33333334,200000000],
        "fill": true,
        "borderColor": "#21B372",
        "tension": 0.1
      },
      {
        "label": "Company",
        "data": [25000000,31250000,37500000.00000001,43750000.00000001,50000000,56250000,62500000,68750000,75000000.00000001,81249999.99999999,87500000,93750000,100000000,106250000.00000001,112499999.99999999,118750000,125000000,131250000,137499999.99999997,143750000.00000003,150000000,156250000,162500000,168749999.99999997,175000000.00000003,181250000,187500000,193750000,199999999.99999997,206250000.00000003,212500000,218750000,225000000,231249999.99999997,237500000.00000003,243750000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000,250000000],
        "fill": true,
        "borderColor": "#FDDE02",
        "tension": 0.1
      },
      {
        "label": "Mining",
        "data": [0,8333333.333333333,16666666.666666666,25000000.000000004,33333333.333333332,41666666.666666664,50000000.00000001,58333333.33333334,66666666.666666664,75000000,83333333.33333333,91666666.66666667,100000000.00000001,108333333.33333334,116666666.66666669,125000000,133333333.33333333,141666666.6666667,150000000,158333333.33333334,166666666.66666666,175000000.00000003,183333333.33333334,191666666.6666667,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000,200000000],
        "fill": true,
        "borderColor": "#0076C5",
        "tension": 0.1
      },
      {
        "label": "Backers",
        "data": [17000000,34000000,51000000,68000000,85000000,102000000.00000001,119000000.00000003,136000000,153000000.00000003,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000,170000000],
        "fill": true,
        "borderColor": "#D30018",
        "tension": 0.1
      }
    ]
  }
}
```
:::
