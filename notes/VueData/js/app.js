// axios.get('data/data.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

fetch('data/data.json')
	 .then(response => response.json())
	 .then(data => console.log(data));

let app = new Vue({
    el: "#app",
    data:{

    },
    methods:{

    }
})