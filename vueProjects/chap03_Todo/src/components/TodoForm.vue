<template>
    <div>
        <form>
            <div class="input-group">  
                <input type="text" class="form-control" v-model="text" ref="inputField" />
                <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-secondary" @click.prevent="sendData" >Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    props: ['addTodo'],
    data: function(){
        return {
            text: ''
        }
    },
    methods: {
        sendData: function(){
            if(this.text === '') return;
            this.addTodo(this.text);
            // this.$refs.inputField.value = '';
            this.text = '';
            this.$refs.inputField.focus();
        }
    }
}
</script>
