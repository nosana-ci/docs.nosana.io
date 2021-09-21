module.exports = {
  ticker: 'NOS',
  totalSupply: 100e6,
  tokenDistribution: [
    {
      name: 'Airdrop',
      total: .05,
      lock: 0,
      vesting: 0,
      upfront: 0,
      color: '#5C2983',
    },
    {
      name: 'Mining',
      total: .10,
      lock: 0,
      vesting: 24,
      upfront: 0,
      color: '#0076C5',
    },
    {
      name: 'Team',
      total: .20,
      lock: 0,
      vesting: 48,
      upfront: 0,
      color: '#21B372',
    },
    {
      name: 'Company',
      total: .25,
      lock: 0,
      vesting: 48,
      upfront: .25,
      color: '#FDDE02',
    },
    {
      name: 'DAO',
      total: .25,
      lock: 6,
      vesting: 42,
      upfront: 0,
      color: '#F76700',
    },
    {
      name: 'Backers',
      total: .15,
      lock: 0,
      vesting: 18,
      upfront: .25,
      color: '#D30018',
    },
  ]
}
