<template>
    <div class="card-body">
        <h3>Todo List</h3>

        <TodoForm :addTodo="addTodo"></TodoForm>
        <br/>
        <Todolist v-bind:todoList="todoList" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></Todolist>

    </div>
</template>

<script>
import TodoForm from './TodoForm';
import Todolist from './TodoList';

let sampleTodos = [
    { id: 1, text: '첫 번째 할 일', done: true },
    { id: 2, text: '두 번째 할 일', done: false },
    { id: 3, text: '세 번째 할 일', done: false },
]

export default {
    name: 'TodoTemplate',
    data: function(){
        return {
            id: 4,
            todoList: sampleTodos
        }
    },
    components: {
        TodoForm, Todolist
    },
    methods: {
        // TodoForm
        addTodo: function(text){
            console.log(text);
            let todo = {id: this.id, text: text, done: false};
            this.todoList.push(todo);

            this.id++;
        },
        // TodoList
        updateTodo: function(id){
            console.log(id);
            let index = this.todoList.findIndex( todo => todo.id === id )
            this.todoList[index].done = !this.todoList[index].done;
        },
        deleteTodo: function(id) {
            console.log(id)
            let index = this.todoList.findIndex( todo => todo.id === id )
            this.todoList.splice(index, 1);
        },
    }
}
</script>

<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css")
</style>