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
          type: 'donut',
          id: 'token-distribution',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
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
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['Mining', 'Team', 'Company', 'DAO', 'Backers'],
      },
      series: [10e6, 20e6, 30e6, 25e6, 15e6],
    }
  },
};

</script>
