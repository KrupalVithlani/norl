if (Meteor.isClient) {
  

  var items = [
    {
      id: "1",
      title: "To do task 1",
      category: "P"
    },
    {
      id: "2",
      title: "To do task 2",
      category: "O"
    },
    {
      id: "3",
      title: "To do task 3",
      category: "U"
    },
    {
      id: "4",
      title: "To do task 4",
      category: "R"
    }
  ];

  Template.todo.helpers({listitems:items});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}