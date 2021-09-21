<template>
  <div id="chart">
    <apexchart :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>

import {tokenDistribution, totalSupply} from "../variables";

export default {
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          id: 'release-timeline',
          stacked: true,
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tickAmount: 4,
          min: 0,
          max: 100e6,
          decimalsInFloat: 0,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
        },
      },
      series: tokenDistribution.map(x => this.generateMonthWiseTimeSeries(x.name,x.total * totalSupply, x.vesting, x.lock, x.upfront))
    }
  },
  methods: {
    generateMonthWiseTimeSeries(name, total, vesting = 0, lock = 0, upfront = 0) {
      let x = new Date('2 Jan 2022') // token distribution
      const series = [];
      for (let i = 0; i < 49; i++) {
        const y = i < lock ? upfront * total : i >= lock + vesting ? total : upfront * total + (total - upfront * total) * (i - lock) / vesting
        series.push([x.getTime(), y]);
        x.setMonth(x.getMonth() + 1)
      }
      return {
        name: name,
        data: series
      };
    }
  }
};

</script>
