<template>
    <div>
        <button @click="increment">加+1</button>
    </div>
</template>
<script>
    import {incrementCounter} from '../vuex/action.js'
    export default{
        vuex:{
            actions:{
                increment:incrementCounter
            }
        }
    }
</script>
<style>

</style>