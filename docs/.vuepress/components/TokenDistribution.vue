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
          // type: 'donut',
          // type: 'pie',
          // type: 'radialBar',
          type: 'polarArea',
          id: 'token-distribution',
          width: 100,
        },
        colors: tokenDistribution.map(x => x.color),
        stroke: {
          colors: ['#fff']
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
        labels: tokenDistribution.map(x => x.name),
      },
      series: tokenDistribution.map(x => x.total * totalSupply),
    }
  },
};

</script>
