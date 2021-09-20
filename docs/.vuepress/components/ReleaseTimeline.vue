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
        legend: {
          position: 'top',
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Date',
          },
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100e6,
          decimalsInFloat: 2,
          title: {
            text: 'NOS Tokens Released',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 3
        },
      },
      series: [{
        name: 'Mining',
        data: this.generateDayWiseTimeSeries(10e6)
      },{
        name: 'Team',
        data: this.generateDayWiseTimeSeries(20e6, 48)
      },{
        name: 'Company',
        data: this.generateDayWiseTimeSeries(30e6, 48, 0, .25)
      },{
        name: 'DAO',
        data: this.generateDayWiseTimeSeries(25e6, 42, 6, 0)
      },{
        name: 'Backers',
        data: this.generateDayWiseTimeSeries(15e6, 18, 0, .25)
      },]
    }
  },
  methods: {
    generateDayWiseTimeSeries(total, vesting = 0, lock = 0, upfront = 0) {
      let x = new Date("1 Jan 2022") // token distribution
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
