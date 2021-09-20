<template>
  <timeline timeline-theme="lightblue">
    <div v-for="quarter in roadmap">
      <timeline-title :hollow="true"><strong>{{ quarter.title }}</strong></timeline-title>
      <timeline-item v-for="task in quarter.tasks" :hollow="(task.todo) ? true : false" >{{ task.title }}</timeline-item>
      <br>
    </div>
  </timeline>
</template>

<script>

import {Timeline, TimelineItem, TimelineTitle} from 'vue-cute-timeline'

/*


### Q1

- [ ] Phase 1 release Solana Mainnet
- [ ] Start Phase 2 development
- [ ] Onboarded 50 projects
- [ ] 50 daily pipelines run
- [ ] Token distribution
- [ ] Airdrop
- [ ] Listing exchanges
- [ ] Public tokensale

### Q2

- [ ] Phase 2 development
- [ ] Integration into other CI/CD systems
- [ ] Onboarded 100 projects

### Q3

- [ ] Phase 2 release Solana mainnet
- [ ] Start Phase 3 development

### Q4

- [ ] Phase 3 release Solana mainnet

 */

export default {
  data: function () {
    return {
      roadmap: [
        {
          title: '2021 - Q1',
          tasks: [
            {title: 'Concept formed'},
            {title: 'Team formed'},
            {title: 'Core platform development'},
          ]
        }, {
          title: '2021 - Q2',
          tasks: [
            {title: 'Phase 1 and Core Platform developmen'},
            {title: 'Website'},
          ]
        }, {
          title: '2021 - Q3',
          tasks: [
            {title: 'Phase 1 and Core Platform development'},
            {title: 'Demo environment build'},
            {title: 'Onepager made'},
            {title: 'Documentation pages online'},
            {title: 'Pitch deck'},
            {title: 'Solana Grant backing'},
            {title: 'Seed round conducted', todo: true},
            {title: 'Private round conducted', todo: true},
          ]
        }, {
          title: '2021 - Q4',
          tasks: [
            {title: 'Phase 1 release Solana Testnet', todo: true},
            {title: 'Incentivized Testnet live', todo: true},
            {title: 'Onboarded 25 projects', todo: true},
          ]
        },{
          title: '2022 - Q1',
          tasks: [
            {title: 'Phase 1 release Solana Testnet', todo: true},
            {title: 'Incentivized Testnet live', todo: true},
            {title: 'Onboarded 25 projects', todo: true},
          ]
        },
      ]
    }
  },
  name: 'Roadmap',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
  }
}

</script>
