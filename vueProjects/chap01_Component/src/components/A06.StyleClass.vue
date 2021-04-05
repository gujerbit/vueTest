
<template>
    <div id="app" class="card-body" v-cloak>
        <h3>6. Style Binding</h3>

        <div v-bind:style="{color: 'orange', fontWeight: 'bold'}">{{hello}}</div>
        <div :style="five">{{hello}}</div>
        <div :style="[five, four]">{{hello}}</div>
        <br>

        <h3>Class Binding</h3>

        <div class="three">{{hello}}</div>
        <div class="three" v-bind:class="oneClass">{{hello}}</div>
        <div class="three" :class="'one'">{{hello}}</div>

        <!-- 일반 클래스만 적용된다 [변수 지정 안됨] -->
        <div class="three" :class="{one: true, two: check}">{{hello}}</div>
        <div class="three" :class="[oneClass, {two: check}]">{{hello}}</div>
        <input type="checkbox" v-model="check"> Check {{check}}<br />
        <br>

        <!-- data의 값 변경으로 스타일 조작 -->
        <div class="three" v-on:mouseenter="enterEvent" v-on:mouseleave="leaveEvent">{{hello}}</div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            hello: 'Hello World!!',
            check: true,
            four: {
                backgroundColor: 'lightgray',
                color: 'orange',
            },
            oneClass: 'one'
        }
    },
    computed: {
        five: function() {
            return {
                'font-size': '20pt'
            }
        }
    },
    methods: {
        enterEvent: function() {
            this.four.backgroundColor = 'black';
            this.four.color = 'white';
        },
        leaveEvent: function() {
            this.four.backgroundColor = 'lightgray';
            this.four.color = 'orange';
        }
      }
}
</script>

<style scoped>
    .one { font-weight: bold; }
    .two { text-decoration: underline; }
    .three { color: orange }

    [v-cloak] { display: none; }
</style>