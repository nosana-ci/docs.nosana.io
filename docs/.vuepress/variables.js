module.exports = {
  totalSupply: 100e6,
  tokenDistribution: [
    {
      name: 'Airdrop',
      total: .05,
      lock: 0,
      vesting: 0,
      upfront: 0,
    },
    {
      name: 'Mining',
      total: .10,
      lock: 0,
      vesting: 24,
      upfront: 0,
    },
    {
      name: 'Team',
      total: .20,
      lock: 0,
      vesting: 48,
      upfront: 0,
    },
    {
      name: 'Company',
      total: .25,
      lock: 0,
      vesting: 48,
      upfront: .25,
    },
    {
      name: 'DAO',
      total: .25,
      lock: 6,
      vesting: 42,
      upfront: 0,
    },
    {
      name: 'Backers',
      total: .15,
      lock: 0,
      vesting: 18,
      upfront: 0.25,
    },
  ]
}
