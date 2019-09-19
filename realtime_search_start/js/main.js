var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {

    },
    created: {

    },
    methods: {
        getAnswer: function () {
            if(this.keyword === '') {
                this.items = null
                return
            }

            this.message = 'Loading...'
            const vm = this
            const params = {
                page: 1,
                per_page: 20,
                query: this.keyword
            }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    vm.message = `Error!${error}`
                })
                .finally(function () {
                    vm.message = ''
                })
        }
    }
})
