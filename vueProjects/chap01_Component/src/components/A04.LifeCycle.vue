
<template>
    <div id="app" class="card-body">
        <h3>4. LifeCycle</h3>
        <br>
        Num: {{num}}<br>
        <button v-on:click="increase()">+1</button>
        <button v-on:click="decrease()">-1</button>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            num: 0,
        }
    },
    methods: {
        increase: function () {
            this.num += 1;
        },
        decrease: function () {
            this.num -= 1;
        },
    },
    // data, event 초기화 전
    beforeCreate: function () {
        console.log('beforeCreate')
    },
    // data, event 초기화 완료
    created: function () {
        console.log('created')
    },
    // DOM 생성 전
    beforeMount: function () {
        console.log('beforeMount')
    },
    // DOM 생성 완료 후 mount
    mounted: function () {
        console.log('mounted')
    },
    // state 변경 전
    beforeUpdate: function () {
        console.log('beforeUpdate')
    },
    // state 변경 후
    updated: function () {
        console.log('updated')
    },
    beforeDestory: function () {
        console.log('beforeDestory')
    },
    destoryed: function () {
        console.log('destoryed')
    }
}
</script>

<style scoped>

</style>