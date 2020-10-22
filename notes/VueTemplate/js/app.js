
//creates new vue component called coffee-view in html based off the template
Vue.component("coffee-view",{
    props: ["coffee"],
    //coffees listed with ! come from this template
    template: "<li>{{ coffee.name}} : ${{coffee.price}} !</li>"
    //refers to name data and price data in coffee object

});
let app = new Vue({
    //put the message in elements with ID app (can be any element)
    el: "#app",
    //message is the placeholder name used in html for the actual message (can be named anything)
    data: {
        purchases: 0,
        message:'Coffee Types',
        ready: true,
        //coffee objects
        coffees: [
            {id:0, price: 5, name: "Pumpkin Spice"}, 
            {id:1, price: 10, name: "Death Wish Coffee"},
            {id:2, price: 15, name:  " Blue Mountain"},
            {id:3, price: 20, name: "Five O' Clock"},
        ]
    },
    methods:{
        buyCoffee: function(){
            this.purchases +=1;
        }
    }
});
// loops through each element in coffee array
items.forEach(item)