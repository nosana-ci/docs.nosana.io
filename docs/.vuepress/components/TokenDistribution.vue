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
          // type: 'donut',
          // type: 'pie',
          type: 'polarArea',
          id: 'token-distribution',
          width: 100,
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        legend: {
          position: 'bottom',
        },
        yaxis: {
          show: false
        },
        labels: ['Mining', 'Team', 'Company', 'DAO', 'Backers'],
      },
      series: [10e6, 20e6, 30e6, 25e6, 15e6],
    }
  },
};

</script>
