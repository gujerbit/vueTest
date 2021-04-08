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
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">Complete</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
}
</script>

<style>
    .ten { width: 10%; }
    .done { text-decoration: line-through; }
</style>