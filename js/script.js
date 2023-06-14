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
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        addTask(){
            if (this.newTask !== ''){
                let object = {

                    text : this.newTask,
                    done : false
                };
                
                this.tasks.push(object);
                this.newTask = '';
            }
        }
    }
}).mount('#app')