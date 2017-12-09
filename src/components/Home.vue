<template>
    <div class="home">
        <router-link to="/login">
            <img src="src/assets/logo.png" alt="logo" class="img-responsive">
            <img src="src/assets/title.png" alt="i-Agriculture" class="img-responsive">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
