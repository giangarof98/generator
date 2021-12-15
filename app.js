const app = Vue.createApp({
    data(){
        return{
            name: "Jhon",
            last: "Connor",
            email: "skynet@gmail.com",
            gender: "male",
            pic: "https://randomuser.me/api/portraits/men/33.jpg"
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.name = results[0].name.first,
            this.last = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.pic = results[0].picture.medium
        }
    }

}).mount('#app')