<template>
    <div>
        <form>
            <div class="input-group">  
                <input type="text" class="form-control"/>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-outline-secondary ">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data: function(){
        return {
            text: ''
        }
    },
    methods: {
        
    }
}
</script>
