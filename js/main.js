const helloComponent = {
    template: '<p>Hello</p>'
}
const app = new Vue({
    el: '#app',
    components: {
        'hello-component': helloComponent
    }
})
