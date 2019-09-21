const app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        clickHandler: function (message) {
            this.message = message
        }
    }
})
