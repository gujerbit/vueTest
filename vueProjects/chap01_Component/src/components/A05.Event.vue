
<template>
    <div id="app" class="card-body">
        <h3>5. Event</h3>
        <br>

        Num: {{num}}<br>
        <button v-on:click="num++">+1</button>
        <button @click="decrease">-1</button>
        <button @click="decrease">once</button>
        <br>
        <br>
        
        <div id="container" @click="outerEvent">
            <div id="inner" @click="innerOne">ONE</div>
            <div id="inner" @click="innerTwo">TWO</div>
        </div>
        <br>
        <br>

        <div>
            <a href="http://www.daum.net" @click="goDaum">DAUM</a> |
            <a href="http://www.naver.com" @click="goNaver">NAVER</a> |
        </div>
        <br>

        <input type="text" class="form-control" /><br>
        esc: <input type="text" class="form-control" v-model="name" /><br>
        Enter: <input type="text" class="form-control" v-model="msg" /><br>
        <!-- 다른 조합도 적용됨 -->
        Alt + Enter<input type="text" class="form-control" v-model="msg" /><br>
        <br>
    
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            num: 0,
            name: 'Guest',
            msg: ''
        }
    },
    methods: {
        decrease: function() {
            this.num--
        },
        outerEvent: function(){
            console.log('Outer')
        },
        innerOne: function() {
            // evt.stopPropagation();
            console.log('Inner One')
        },
        innerTwo: function() {
            console.log('Inner Two')
        },
        goDaum: function() {
            // evt.preventDefault();
            console.log('Daum')
        },
        goNaver: function() {
            console.log('Naver')
        },
        keyUpEvent: function(evt) {
            console.log(evt);
        },
        escEvent: function() {
            this.name = '';
        },
        helpEvent: function() {
            alert('10자 이내로 입력해주세요')
        },
        showEvent: function() {
            alert('20자 이내로 입력해주세요')
        },
      },
}
</script>

<style scoped>
    #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
    #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>