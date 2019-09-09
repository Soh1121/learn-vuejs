var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        url: 'https://jp.vuejs.org/',
        toggle: true,
        languages: [
            'JavaScript',
            'Ruby',
            'Python'
        ]
    },
    methods: {
        click: function () {
            this.message = 'Clicked!';
        }
    }
})
