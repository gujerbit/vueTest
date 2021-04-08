<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Complete</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todoList" :key="todo.id">
                    <td>{{todo.id}}</td>
                    <td :class="{done: todo.done}">{{todo.text}}</td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" v-on:click="updateTodo(todo.id)">Complete</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteTodo(todo.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: ['todoList', 'updateTodo', 'deleteTodo']
}
</script>

<style>
    .ten { width: 10%; }
    .done { text-decoration: line-through; }
</style>