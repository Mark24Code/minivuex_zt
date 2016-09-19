<template>
    <div class="app">
        <h1>Vuex试验</h1>
        <div>来自App的msg:{{msg}}</div>

        <display></display>
        <increment></increment>
    </div>

    <validator name="validation1">
        <form novalidate>
          <div class="username-field">
            <label for="username">username:</label>
            <input id="username" type="text" v-validate:username="['required']">
          </div>
          <div class="comment-field">
            <label for="comment">comment:</label>
            <input id="comment" type="text" v-validate:comment="{ maxlength: 10 }">
          </div>
          <div class="errors">
            <p v-if="$validation1.username.required">Required your name.</p>
            <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
          </div>
          <input type="submit" value="send" v-if="$validation1.valid">
        </form>
    </validator>

</template>
<script>
    import store from './vuex/store.js';
    import display from './components/Display.vue';
    import increment from './components/Increment.vue';
    export default{
        data(){
            return {
                msg:"App总组件msg"
            }
        },
        components:{
            display,
            increment
        },
        store
    }
</script>
<style>
.app{
    width: 100%;
    text-align: center;
    height:200px;
    color:red;
    font-weight: bold;
}
</style>