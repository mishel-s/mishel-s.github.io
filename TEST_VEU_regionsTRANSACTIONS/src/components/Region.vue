<template lang="html">
  <div class="region" v-if="region">
    <h1 class="region__name">{{ transactions[this.id-1].regionName }}</h1>
    <p class="transactionsAmount">{{ transactions[this.id-1].transactionsAmount }}</p>
    <p><GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    /></p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    name: "Region",
    data() {
      return {
        region: null,
        chartData: null,
        chartOptions: {
          chart: {
            title: 'Transactions amount by regions',
            subtitle: 'Transactions',
          }
        },
        regions: [
          {"id":1, regionName:"АР Крим"},
          {"id":2, regionName:"Вінницька обл"},
          {"id":3,regionName:"Волинська обл"},
          {"id":4,regionName:"Дніпропетровська обл"},
          {"id":5,regionName:"Донецька обл"},
          {"id":6,regionName:"Житомирська обл"},
          {"id":7,regionName:"Закарпатська обл"},
          {"id":8,regionName:"Запорiзька обл"},
          {"id":9,regionName:"Iвано-Франкiвська обл"},
          {"id":10,regionName:"Київська обл"},
          {"id":11,regionName:"Кіровоградська обл"},
          {"id":12,regionName:"Луганська обл"},
          {"id":13,regionName:"Львiвська обл"},
          {"id":14,regionName:"Миколаївська обл"},
          {"id":15,regionName:"Одеська обл"},
          {"id":16,regionName:"Полтавська обл"},
          {"id":17,regionName:"Рiвненська обл"},
          {"id":18,regionName:"Сумська обл"},
          {"id":19,regionName:"Тернопільська обл"},
          {"id":20,regionName:"Харківська обл"},
          {"id":21,regionName:"Херсонська обл"},
          {"id":22,regionName:"Хмельницька обл"},
          {"id":23,regionName:"Черкаська обл"},
          {"id":24,regionName:"Чернiвецька обл"},
          {"id":25,regionName:"Чернігівська обл"},
          {"id":26,regionName:"м.Київ"},
          {"id":27,regionName:"Севастополь"}
        ],
        transactions: [
          {"id":1,regionName:"АР Крим", transactionsAmount: 100},
          {"id":2,regionName:"Вінницька обл", transactionsAmount: 45780},
          {"id":3,regionName:"Волинська обл", transactionsAmount: 43211},
          {"id":4,regionName:"Дніпропетровська обл", transactionsAmount: 64321},
          {"id":5,regionName:"Донецька обл", transactionsAmount: 43421},
          {"id":6,regionName:"Житомирська обл", transactionsAmount: 23210},
          {"id":7,regionName:"Закарпатська обл", transactionsAmount: 53212},
          {"id":8,regionName:"Запорiзька обл", transactionsAmount: 14321},
          {"id":9,regionName:"Iвано-Франкiвська обл", transactionsAmount: 24321},
          {"id":10,regionName:"Київська обл", transactionsAmount: 73216},
          {"id":11,regionName:"Кіровоградська обл", transactionsAmount: 43212},
          {"id":12,regionName:"Луганська обл", transactionsAmount: 43217},
          {"id":13,regionName:"Львiвська обл", transactionsAmount: 33121},
          {"id":14,regionName:"Миколаївська обл", transactionsAmount: 47321},
          {"id":15,regionName:"Одеська обл", transactionsAmount: 78321},
          {"id":16,regionName:"Полтавська обл", transactionsAmount: 54321},
          {"id":17,regionName:"Рiвненська обл", transactionsAmount: 14341},
          {"id":18,regionName:"Сумська обл", transactionsAmount: 24321},
          {"id":19,regionName:"Тернопільська обл", transactionsAmount: 34321},
          {"id":20,regionName:"Харківська обл", transactionsAmount: 33521},
          {"id":21,regionName:"Херсонська обл", transactionsAmount: 29587},
          {"id":22,regionName:"Хмельницька обл", transactionsAmount: 34321},
          {"id":23,regionName:"Черкаська обл", transactionsAmount: 42321},
          {"id":24,regionName:"Чернiвецька обл", transactionsAmount: 44100},
          {"id":25,regionName:"Чернігівська обл", transactionsAmount: 64231},
          {"id":26,regionName:"м.Київ", transactionsAmount: 114465},
          {"id":27,regionName:"Севастополь", transactionsAmount: 85}
        ],
      }
    },

    methods: {
      getRegion(id) {
        axios(this.regions + id)
          .then(response => {
            this.region = response.data
          })
          .catch( error => {
            console.log(error)
          })
      }
    },

    created() {
      this.getRegion(this.id);
    },

    watch: {
      '$route'() {
        this.getRegion(this.id);
        this.region = this.id;
        this.chartData = [
          ['Transactions amount', 'Transactions'],
          ['Transactions amount', this.transactions[this.id-1].transactionsAmount],
        ];
      }
    }
  }
</script>

<style scoped>
  .region {
    padding: 15px;
  }
</style>
