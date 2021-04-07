<template>
    <div>
        <h6>A04 Child Component</h6>
        This is Child Component<br>
        <br>

        <router-link to="/child/profile">Profile</router-link> | 
        <router-link to="/child/userInfo">UserInfo</router-link>
        <hr>
        
        <router-view></router-view>

    </div>
</template>

<script>

export default {
    name: 'Child',
    data: function(){
        return {
            
        }
    }
}
</script>

<style>

</style>