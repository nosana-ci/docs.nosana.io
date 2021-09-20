<template>
  <div id="chart">
    <apexchart :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>

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
      series: [{
        name: 'Mining',
        data: this.generateMonthWiseTimeSeries(10e6)
      },{
        name: 'Team',
        data: this.generateMonthWiseTimeSeries(20e6, 48)
      },{
        name: 'Company',
        data: this.generateMonthWiseTimeSeries(30e6, 48, 0, .25)
      },{
        name: 'DAO',
        data: this.generateMonthWiseTimeSeries(25e6, 42, 6, 0)
      },{
        name: 'Backers',
        data: this.generateMonthWiseTimeSeries(15e6, 18, 0, .25)
      },]
    }
  },
  methods: {
    generateMonthWiseTimeSeries(total, vesting = 0, lock = 0, upfront = 0) {
      let x = new Date('2 Jan 2022') // token distribution
      const series = [];
      for (let i = 0; i < 49; i++) {
        const y = i < lock ? upfront * total : i >= lock + vesting ? total : upfront * total + (total - upfront * total) * (i - lock) / vesting
        series.push([x.getTime(), y]);
        x.setMonth(x.getMonth() + 1)
      }
      return series;
    }
  }
};

</script>
