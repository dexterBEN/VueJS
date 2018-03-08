(function() {
    'use strict';
//var storageApp = new localStorage();

var VueOfTodo = new Vue({
    el:'#Todo-list-app',
    data:{

        newTaskTitle : "",
        index:0,
        listOfTask:[
            {
                label:"walk the dog",
                isDone:false
            },
    
            {
                label:"go to the store",
                isDone:false
            },
    
            {
                label:"finish portfolio",
                isDone:false
            },
    
            {
                label:"do something",
                isDone:false
            }
        ],

    },

    methods:{
        taskInRest: function(){
            var nbTaskRestant = 0;

            // this.prenom

            for(var i = 0; i < this.listOfTask.length; i++){

                if(this.listOfTask[i].isDone === false){
                    nbTaskRestant++;
                }
                
            }
            return nbTaskRestant; 
        },

        addTask: function(){
            var nameTask = this.newTaskTitle;
            var fait = false;
            var newTask = {
                label:nameTask,
                isDone: fait
            }
            
            this.listOfTask.push(newTask);
            this.newTaskTitle ="";//Permet de faire en sorte que la zone de saisie soit vide après un 'submit'

            //Sauvegarde des tâches 
            localStorage.setItem("listOfTask", JSON.stringify(this.listOfTask));
        },

        removeTask: function(){
            this.listOfTask.splice(this.index, 1);
        }

    },

    created: function() {
        var taskList = localStorage.getItem("listOfTask");
        if(taskList === null){
            this.listOfTask = [];
        }else{
            this.listOfTask = JSON.parse(taskList);
        }
    },

    
    filters:{

        pluriel: function(nbTaskRestant, mot ){
            if(nbTaskRestant > 1){

                    return nbTaskRestant+' '+ mot + 's';
                }else{

                    return nbTaskRestant+' '+mot;
            }
        }

    }
})
})();