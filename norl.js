Todos = new Mongo.Collection("todos");
Northstar = new Mongo.Collection("northstar");
Orions = new Mongo.Collection("orions");
console.log(Northstar.find().count());

if (Meteor.isClient) {

  Template.todo.helpers({listitems:Todos.find({}, { sort: { category:"⚠️", createdOn: -1} })});
  Template.northstar.helpers({northstar:Northstar.find()}); 
  Template.orion.helpers({orions:Orions.find()});

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

  Template.todo_add_form.events({
    'submit .js_add_todo': function(event){
      var todo_item, todo_category;
      todo_item = event.target.todo_item.value;
      todo_category = event.target.todo_category.value;
      console.log ('item:'+todo_item + 'category:'+todo_category)
      Todos.insert(
        {
          title: todo_item,
          category: todo_category,
          isChecked:false,
          createdOn:new Date()
        }
      );
      return false;
    }

  });

  Template.northstar.events({
    'keyup [name=title]': function(event){
      var northstarId = this._id;
      var title = $(event.target).val();
      Northstar.update({ _id: northstarId }, {$set: { title: title }});
      console.log(northstarId + title)
  }

  });

  Template.orion.events({
    'keyup [name=title]': function(event){
      var orionId = this._id;
      var title = $(event.target).val();
      Orions.update({ _id: orionId }, {$set: { title: title }});
      console.log(orionId + title)
  }

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
  });
}