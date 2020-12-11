Todos = new Mongo.Collection("todos");
console.log(Todos.find().count());

if (Meteor.isClient) {

  var todos = [
    {
      title: "To do task 1",
      category: "P",
      checked:false
    },
    {
      title: "To do task 2",
      category: "O",
      checked:true
    },
    {
      title: "To do task 3",
      category: "U",
      checked:true
    },
    {
      title: "To do task 4",
      category: "R",
      checked:false
    }
  ];
  //Template.todo.helpers({listitems:todos});
  
  Template.todo.helpers({listitems:Todos.find()});

  Template.todo.events({
    'click .js-del-todo': function(event){
      //alert('This will delete the item');
      var todo_id = this._id;
      console.log(todo_id);
      $("#"+todo_id).hide("slow", function(){
        Todos.remove({"_id":todo_id});
        console.log(Todos.find().count());
      });

    },
    
    'change .js-check-todo': function(event){
      //alert('This will delete the item');
      var todo_id = this._id;
      console.log(todo_id)
      isChecked=$(event.target).is(':checked');
      console.log(isChecked)
      Todos.update({"_id":todo_id},
       {
        $set: {
          isChecked: isChecked
        }
       }
        
      );      
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
  });
}