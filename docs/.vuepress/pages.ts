export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    children: ['intro', 'background', 'roadmap', 'community-groups'],
  },
  {
    text: 'A.I. Inference',
    icon: 'robot',
    prefix: '/inference/',
    children: ['start', 'llama', 'diffusion'],
  },
  {
    text: 'Nodes',
    icon: 'server',
    prefix: '/nodes/',
    children: ['testgrid', 'testgrid-windows', 'testgrid-ubuntu', 'troubleshoot'],
  },
  {
    text: 'Protocols',
    icon: 'link',
    prefix: '/protocols/',
    children: ['start', 'staking', 'rewards', 'pools', 'jobs', 'nodes', 'token'],
  },
];
