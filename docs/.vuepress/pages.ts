export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    children: ['intro', 'background'],
  },
  {
    text: 'A.I. Inference',
    icon: 'robot',
    prefix: '/ai/',
    children: ['start', 'llama', 'generative'],
  },
  {
    text: 'Nodes',
    icon: 'server',
    prefix: '/nodes/',
    children: ['start', 'docker-node'],
  },
  {
    text: 'Protocols',
    icon: 'code',
    prefix: '/programs/',
    children: ['start', 'staking', 'rewards', 'pools', 'jobs', 'nodes', 'token'],
  },
];
