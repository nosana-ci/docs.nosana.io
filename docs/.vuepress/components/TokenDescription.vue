<template>
  <p>
    {{ getDescription() }}
  </p>
</template>

<script>

import {tokenDistribution, ticker} from "../variables";

export default {
  props: ['pool'],
  methods: {
    getDescription() {

      const pool = tokenDistribution.find(({name}) => name === this.$props.pool)

      let description = `${pool.name} tokens take up ${pool.total * 100}% of the total amount of ${ticker} tokens.`

      if (pool.vesting === 0 && pool.lock === 0) {
        description += ` These tokens are available at token distribution.`
        return description
      }
      if (pool.vesting !== 0) {
        description += ` These are linearly released over ${pool.vesting} months (${pool.vesting / 12} years), `
        if (pool.lock !== 0) {
          description += ` after they have been locked for ${pool.lock} months.`
        } else {
          description += ` starting at token distribution.`
        }
      }
      if (pool.upfront !== 0) {
        description += ` ${pool.upfront * 100}% of this pool is directly released at token distribution.`
      }

      return description
    }
  }
}

</script>
