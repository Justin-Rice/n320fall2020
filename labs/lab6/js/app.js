
Vue.component("book-view",{
    props: ["book"],
    template: 
    `
    
     <div class ="row" v-if=\"book.display\">
        <h1>{{book.name}}</h1>
        <h2>{{book.emoji}}</h2>
        <h2>{{book.author}}</h2>
    
    </div>
    

    `
    
});
let app = new Vue({
    el: "#app",
    data: {
        books: [
            {id:0, name: "Da Rules",emoji:"👑" , author: "The Fairy Council",display: true}, 
            {id:1, name: "Da Rules Too",emoji:"📏" , author: "Jorgen VonStrangle",display: true},
          
        ]
    },
    methods:{
        show: function(){
            if(this.books[1].display == false){
                this.books[1].display = true;
                console.log("poopy");
                }else if(this.books[1].display == true){
                this.books[1].display = false;
                console.log("poopy");


            }
        }
    }
});
