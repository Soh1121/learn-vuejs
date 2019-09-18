const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    computed: {
        reversedMessage: function() {
            return message.split('').reverse().join('')
        }
    }
})
