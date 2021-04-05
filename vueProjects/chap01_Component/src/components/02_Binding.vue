<template>
    <div>
        <div class="card-body">
        <h3>{{title}}</h3>
        <br>

        <div>
            v-text: <span v-text="text"></span><br>
            v-html: <span v-html="text"></span><br>
            v-once: <span v-once>{{text}}</span><br>
            <!-- v-pre: <span></span><br> -->
            <br>
            <button v-on:click="changeText('Nolbu')">Nolbu</button> &nbsp;
            <button @click="changeText('<b>Hungbu</b>')">Hungbu</button>
            <br>
            <br>
            {{num}} <br>
            <input type="text" class="form-control" v-model="num">
            <input type="text" v-bind:class="formControl" v-model="num">
            <input type="text" :class="formControl" v-model="num">
            <br>
            
            <input type="checkbox" value="apple" v-model="fruit">사과, 
            <input type="checkbox" value="banana" v-model="fruit">바나나, 
            <input type="checkbox" value="melon" v-model="fruit">멜론<br>
            
            <div>당신이 선택한 과일은 {{fruit}}</div>
            <div>
                <span v-for="(item, i) in fruit" :key="item">
                    {{item}} {{i !== fruit.length - 1 ? ',' : ''}}
                </span>
            </div>
        <br>

        computed: {{one}} <br>
        methods: {{two()}}<br>
        <br>
      
    </div>
  </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            title: '2.Binding',
            text: '<b>Hello World</b>',
            num: 10,
            formControl: 'form-control',
            fruit: []
        }
    },
    methods: {
        changeText: function(val) {
            this.text = val;
        },
        two() {
            console.log('methods');
            let total = 0;
            let x = Number(this.num);

            if(isNaN(x)) total = 0;

            for(let i = 0; i <= x; i++) {
                total += i;
            }

            return total;
        }
    },
    computed: {
        one: function() {
            console.log('computed');
            let total = 0;
            let x = Number(this.num);

            if(isNaN(x)) total = 0;

            for(let i = 0; i <= x; i++) {
                total += i;
            }

            return total;
        }
    }
}
</script>

<style scoped>

</style>