<template>
  <p>
    <strong :style="getColor()">Specs:</strong> {{ getDescription() }}
  </p>
</template>

<script>

import {tokenDistribution, ticker} from "../variables";

export default {
  props: ['pool'],
  methods: {
    getPool() {
      return tokenDistribution.find(({name}) => name === this.$props.pool)
    },
    getColor() {
      return `color:${this.getPool().color}`
    },
    getDescription() {

      const pool = this.getPool()

      let description = `${pool.name} tokens account for ${pool.total * 100}% of the total number of ${ticker} tokens.`

      if (pool.vesting === 0 && pool.lock === 0) {
        description += ` These tokens are available at token distribution.`
        return description
      }
      if (pool.vesting !== 0) {
        description += ` The tokens are released in a linear fashion over a period of ${pool.vesting} months (${pool.vesting / 12} years), `
        if (pool.lock !== 0) {
          description += ` after they have been locked for ${pool.lock} months.`
        } else {
          description += ` beginning with at token distribution.`
        }
      }
      if (pool.upfront !== 0) {
        description += ` At token distribution, ${pool.upfront * 100}% of this pool is directly released.`
      }

      return description
    }
  }
}

</script>
