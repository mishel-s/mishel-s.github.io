<template>
  <div id="app">
    <header>
      <h1>Количество транзакций по регионам</h1>
    </header>
    <main>
      <div class="graphic">
        <router-view>
        </router-view>
      </div>
      <div class="regionsSelect">
        <b>Регион:</b>
        <select v-on:change="changeRoute(selected)" v-model="selected">
          <option value="0" hidden>Выберите регион</option>
          <option
            v-for="item in regions"
            active-class="is-active"
            :value="item.id"
          >{{ item.regionName }}
          </option>
        </select>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        selected: '0',
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
        regionslink: 'http://api.spending.gov.ua/api/v2/regions',
        transactionslink: 'http://api.spending.gov.ua/api/v2/api/transactions/top100',
      }
    },

    created() {
      this.getAllRegions();
      this.getAllTransactions();
    },

    methods: {
      changeRoute(selected) {
        this.$router.push({path:'/region/' +  selected });
      },

      getAllRegions() {
        axios.get(this.regionslink)
          .then(response => {
            //не отображает ответ
            console.log(response);
            this.regions = response.json();
            console.log(this.regions);
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      },
      getAllTransactions() {
        axios.get(this.transactionslink)
          .then(response => {
            //не отображает ответ
            console.log(response);
            this.transactions = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      },
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

main {
  border: 2px solid darkslategrey;
  border-radius: 5px;
  background-color: aquamarine;
}

.regionsSelect {
  border-top: 1px solid darkslategrey;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  width: 60%;
  height: 25px;
  border: 1px solid darkslategrey;
  border-radius: 5px;
}

a {
  color: #42b983;
}
</style>
