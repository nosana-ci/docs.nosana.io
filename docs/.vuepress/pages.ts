export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    children: ['intro', 'roadmap', 'background'],
  },
  {
    text: 'A.I. Inference',
    icon: 'robot',
    prefix: '/a.i./',
    children: ['start', 'llama', 'diffusion'],
  },
  {
    text: 'Nodes',
    icon: 'server',
    prefix: '/nodes/',
    children: ['start', 'docker-node'],
  },
  {
    text: 'Protocols',
    icon: 'link',
    prefix: '/protocols/',
    children: ['start', 'staking', 'rewards', 'pools', 'jobs', 'nodes', 'token'],
  },
];
