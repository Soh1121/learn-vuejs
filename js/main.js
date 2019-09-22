Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">{{ count }}</button>'
})
const app = new Vue({
    el: '#app',
})
