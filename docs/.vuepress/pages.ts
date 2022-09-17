export default [
  {
    text: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    text: 'Introduction',
    icon: 'lightbulb',
    link: '/intro',
  },
  {
    text: 'Nodes',
    icon: 'server',
    prefix: '/nodes/',
    children: ['start', 'stake', 'nft'],
  },
  {
    text: 'Programs',
    icon: 'code',
    prefix: '/programs/',
    children: ['intro', 'staking', 'rewards', 'pools', 'jobs', 'voting'],
  },
  {
    text: 'Tokens',
    icon: 'coins',
    prefix: '/tokens/',
    children: ['intro', 'token', 'nft', 'card'],
  },
];
