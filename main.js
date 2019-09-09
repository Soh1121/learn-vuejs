var app = new Vue({
    // options
    el: '#app',
    data: {
        now: ''
    },
    methods: {
        onclick: function() {
            // alert('onclick')
            this.now = new Date().toLocaleString();
        }
    }
})
