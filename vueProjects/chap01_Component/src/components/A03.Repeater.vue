<template>
    <div id="app" class="card-body">
        <h3>3. Vue Component Repeat</h3>
        <br>

        <h5>v-show</h5>
        <div>
            v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
        </div>
        <br />

        <h5>v-if</h5>
        <div>
            Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
        </div>
        <div>
            v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다. 또한 여러 개를 사용할 수 있습니다.
        </div>
        <div>
            v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다
        </div>
        <br>

        <h5>v-for</h5>
        <table class="table">
        <thead>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Kor</th>
            <th>Eng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        </table>
        <br>

        <div>
            <button class="btn btn-outline-primary btn-sm" @click="changeCheck()">Check</button>
            <button class="btn btn-outline-primary btn-sm" @click="changeName('nolbu')">IF</button>
            <button class="btn btn-outline-primary btn-sm" @click="changeName('hungbu')">Else IF</button>
            <button class="btn btn-outline-primary btn-sm" @click="changeName('bangja')">Else</button><br>
        </div>
  </div>
</template>

<script>
let model = {
    students: [
        { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
        { name: 'NolBu', age: 50, kor: 90, eng: 90 },
        { name: 'HungBu', age: 40, kor: 70, eng: 60 },
    ]
}

export default {
    data: function(){
        return {
            check: true,
            name: 'nolbu',
            students: model.students
        }
    },
    methods: {
        changeCheck: function() {
            this.check = !this.check
        },
        changeName: function(name) {
            this.name = name;
        }
    }
}
</script>

<style scoped>

</style>