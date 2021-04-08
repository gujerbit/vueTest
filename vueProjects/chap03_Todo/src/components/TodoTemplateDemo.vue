<template>
    <div class="card-body">
        <h3>Todo List</h3>

        <TodoForm></TodoForm>
        <br/>
        <Todolist></Todolist>

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
            todos: sampleTodos
        }
    },
    components: {
        TodoForm, Todolist
    },
    methods: {
        addTodo: function(text){
            console.log(text)
        },
        updateTodo: function(id){
            console.log(id)
        },
        deleteTodo: function(id) {
            console.log(id)
        },
    }
}
</script>

<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css")
</style>