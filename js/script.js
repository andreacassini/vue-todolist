const {createApp} = Vue;

createApp ({
    data(){
        return{
            tasks : [
                {
                    text: 'Fare lavatrice',
                    done: true
                },
                {
                    text: 'Impostare timer',
                    done: false
                },
                {
                    text: 'Fare spesa',
                    done: true
                },
                {
                    text: 'Comprare latte',
                    done: false
                }
            ]
        } 
    },

    methods: {
            
        }
}).mount('#app')