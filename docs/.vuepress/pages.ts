export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    children: ['intro', 'background', 'roadmap', 'community'],
  },
  {
    text: 'A.I. Inference',
    icon: 'robot',
    prefix: '/inference/',
    children: ['quick_start', 'job_schema', 'endpoints', 'writing_a_job', 'markets', 'cached_resources'],
  },
  {
    text: 'Inference Examples',
    icon: 'code',
    prefix: '/inference/examples/',
    collapsible: true,
    children: [
      'hello_world',
      'jupyter',
      'open_webui',
      'stable',
      'whisper',
      'ollama',
      'tinyllama',
      'multi_job',
      'vllm',
      'lmdeploy',
    ],
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
