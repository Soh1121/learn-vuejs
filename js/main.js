const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    watch: {
        message: (newValue, oldValue) => {
            console.log(`new: ${newValue}, old: ${oldValue}`)
        }
    }
})
