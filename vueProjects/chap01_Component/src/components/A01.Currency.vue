<template>
  <div>
    <h3>1. Currency</h3>
    <br>

    <div>
    Qty: <input type="text" class="form-control" v-model="qty"><br>
    Cost: <input type="text" class="form-control" v-model="cost"><br>
    Country: 
        <select class="form-control" v-model="inCurr">
            <option v-for="item in currencies" :key="item">{{item}} </option>
        </select>
    </div>
    <br>

    <div>
        Total: <span>{{qty*cost}}</span>
    </div>
    <br>
    <div>
        Total: <span v-for="item in currencies" :key="item">{{item}}{{onTotal(item)}} &nbsp;&nbsp;&nbsp;</span>
    </div>

    

   
  </div>
</template>

<script>
export default {
    name: 'currency',  //태그 네임이 아니다. 재귀호출 목적용
    data: function() {     //사용할 데이터(변수) 정의
        return {
        qty: 3,
        cost: 5,
        inCurr: 'USD',
        currencies: ['USD', 'EUR', 'CNY'],
        rate: {
            USD: 1,
            EUR: 1.35,
            CNY: 6.87
        }
      }
    },
    methods: {                //method 정의
        onTotal: function(outCurr) {
            // return this.qty*this.cost*this.rate[this.inCurr] / this.rate[outCurr];
             return (this.qty*this.cost*this.rate[this.inCurr] / this.rate[outCurr]).toFixed(2);
                                        // 소수이하 2자리에서 끊기 toFixed(2)
        }
    }
}
</script>

<style scoped>

</style>
