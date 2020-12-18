if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Todos.find().count() == 0){
      Todos.insert(
        {
          title: "To do task 5",
          category: "P",
          isChecked:false
        }
      ),
      Todos.insert(
        {
          title: "To do task 6",
          category: "O",
          isChecked:true
        }
      ),
      Todos.insert(
        {
          title: "To do task 7",
          category: "U",
          isChecked:false
        }
      ),
      Todos.insert(
        {
          title: "To do task 8",
          category: "R",
          isChecked:true
        }
      ),
      Northstar.insert(
        {
          title: "This is North Star"
        }
      )
    }; 
    if (Orions.find().count() == 0){
      Orions.insert(
        {
          title: "This is Orion 1",
        }
      ),
      Orions.insert(
        {
          title: "This is Orion 2",
        }
      ),
      Orions.insert(
        {
          title: "This is Orion 3",
        }
      )
    }
  });
  
}