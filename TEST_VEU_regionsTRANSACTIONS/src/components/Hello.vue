<template>
  <div class="helloGraphic">
    <div class="title">
      <h1>Выберите "Регион", чтобы увидеть актуальную информацию!</h1>
    </div>
    <p><GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    /></p>
  </div>
</template>

<script>
  import { GChart } from 'vue-google-charts'
  export default {
    name: 'hello',
    data () {
      return {
        chartData: [
          ['Transactions amount', 'Transactions'],
          ['Transactions amount', 1000],
        ],
        chartOptions: {
          chart: {
            title: 'Transactions amount by regions',
            subtitle: 'Transactions',
          }
        }
      }
    }
  }
</script>

<style scoped>

.helloGraphic {
  padding: 15px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

