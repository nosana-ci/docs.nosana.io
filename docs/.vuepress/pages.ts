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
    text: 'F.A.Q.',
    icon: 'question',
    link: '/faq',
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
    children: ['staking', 'rewards', 'pools', 'jobs', 'voting'],
  },
  {
    text: 'Tokens',
    icon: 'coins',
    prefix: '/tokens/',
    children: ['intro', 'token', 'nft', 'card'],
  },
];
