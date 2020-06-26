// @ts-ignore
Vue.component('todo-item', {
    props: ['todo'], // 这是啥???, 类似属性名称的！
    template: '<li>{{ todo.text }}</li>'
})

// @ts-ignore
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '管他呢'}
        ]
    }
})