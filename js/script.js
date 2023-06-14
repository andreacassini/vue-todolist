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
        changeTask(index){
            this.tasks[index].done = !this.tasks[index].done;
        }
        }
}).mount('#app')