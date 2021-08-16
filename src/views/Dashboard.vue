<template>
<div>
    ola batman {{userName}}
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Dashboard',
    data(){
        return {
            userName:'',
        }
    },
    computed: {
    ...mapGetters(['currentUser']),
    },
    mounted(){
        this.userName = this.currentUser.name;
    } 
}
</script>