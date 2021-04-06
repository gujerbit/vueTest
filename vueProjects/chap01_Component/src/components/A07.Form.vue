
<template>
    <div id="app" class="card-body">
        <h3>7. Vue Form Element</h3>
        <br>

        Text Field: <span class="orange">{{name}}</span>
        <input type="text" class="form-control" v-model.trim="name"><br>

        Number Field: <span class="orange">{{age + 10}}</span>
        <input type="number" class="form-control" v-model.number="age"><br>

        Lazy Field: <span class="orange">{{address}}</span>
        <input type="text" class="form-control" v-model.lazy="address"><br>


        Radio Button: <span class="orange">{{gender}}</span><br>
        <input type="radio" name="gender" value="남자" v-model="gender">Male
        <input type="radio" name="gender" value="여자" v-model="gender">Female
        <input type="radio" name="gender" value="어린이" v-model="gender">Children <br>
        <br>

        Single Check: <span class="orange">{{check}}</span><br>
        <input type="checkbox" name="check" v-model="check">Agree<br>
        <br>

        CheckBox: <span class="orange">{{fruit}}</span><br>
        <input type="checkbox" name="abc" value="apple" v-model="fruit">사과,
        <input type="checkbox" name="abc" value="banana" v-model="fruit">바나나,
        <input type="checkbox" name="abc" value="melon" v-model="fruit">멜론<br>
        <br>

        SelectBox: <span class="orange">{{inCurr}}</span><br>
        <select class="form-control" v-model="inCurr">
        <option v-for="(item, index) in currencies" v-bind:key="index">{{item}}</option>
        </select>
        <br>

        SelectBox Multi: <span class="orange">{{lang}}</span><br>
        <select class="form-control" multiple v-model="lang">
        <option v-for="(item, index) in language" v-bind:key="index">{{item}}</option>
        </select>
        <br>

        TextArea: <span class="orange">{{comment}}</span>
        <textarea cols="50" rows="5" class="form-control" v-model="comment"></textarea>
        <br>


        Radio Button Object Value: <span class="orange">{{person}} / {{person.name}}</span><br>
        <input type="radio" name="person" v-model="person" v-bind:value="{name: 'NolBu', age: 40}">놀부
        <input type="radio" name="person" v-model="person" v-bind:value="{name: 'HungBu', age: 30}">흥부
        <input type="radio" name="person" v-model="person" v-bind:value="{name: 'BangJa', age: 20}">방자 <br>
        <br>


        Text Field: <span class="orange">{{name}}</span>
        <input type="text" class="form-control" v-bind:value="name" v-on:input="changeName"><br>
        <br>

        <input type="text" class="form-control" ref="inputField"><br>
        <button v-on:click="clickEvent" ref="btn">Click</button>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: ' NolBu',
            age: '',
            address: '',
            gender: '남자',
            check: true,
            fruit: ['apple'],
            inCurr: 'EUR',
            currencies: ['USD', 'EUR', 'CNY'],
            lang: ['한국어'],
            language: ['한국어', '영어', '프랑스어', '독일어', '스페인어'],
            comment: '',
            person: {}
        }
    },
    methods: {
        changeName: function(evt) {
            this.name = evt.target.value;
        },
        clickEvent: function() {
            console.log(this.$refs);
            this.$refs.inputField.style.color = "#ff00ff";
        }
    }
}
</script>

<style scoped>
    .orange { color: orange; }
</style>