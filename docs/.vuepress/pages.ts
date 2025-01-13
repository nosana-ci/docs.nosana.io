export default [
  {
    text: 'About',
    icon: 'lightbulb',
    prefix: '/about/',
    collapsible: true,
    children: ['intro', 'background', 'roadmap', 'glossary', 'community'],
  },
  {
    text: 'Host GPUs',
    icon: 'server',
    prefix: '/hosts/',
    collapsible: true,
    children: ['grid', 'grid-windows', 'grid-ubuntu', 'grid-run', 'troubleshoot'],
  },
  {
    text: 'Run Inference',
    icon: 'robot',
    prefix: '/inference/',
    collapsible: true,
    children: ['quick_start', 'job_schema', 'endpoints', 'writing_a_job', 'markets', 'cached_resources',
      {
        text: "Examples",
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
      }
    ],
  },
  {
    text: 'SDK Usage',
    icon: 'code',
    prefix: '/sdk/',
    collapsible: true,
    children: ['sdk_start', 'hello_world', 'tiny_llama', 'jupyter'],
  },
  {
    text: 'Protocol Docs',
    icon: 'link',
    prefix: '/protocols/',
    collapsible: true,
    children: ['start', 'staking', 'rewards', 'pools', 'jobs', 'nodes', 'token'],
  },
];
