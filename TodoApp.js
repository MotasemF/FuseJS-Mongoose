var Mongoose = require("./Mongoose.js");
class TodoItem {
  constructor(description) {
    this.description = description;
  }
}
var db = new Mongoose("todoDB");

var TodoCollection = db.collection("todo", { max: 30 });

export default class TodoApp {
  constructor() {
    this.todos = [];
    this.newTodo = "";
    this.getTodos();
  }

  addTodo() {
    var todoItem = new TodoItem(this.newTodo);
    this.todos.push(todoItem);
    this.newTodo = "";

    TodoCollection.insert(todoItem);
  }

  getTodos() {
    TodoCollection.find({}).then(val => {
      this.todos = val;
    });
  }

  removeTodo(args) {
    var index = this.todos.indexOf(args.data);
    this.todos.splice(index, 1);
    TodoCollection.remove(args.data);
  }

  get todosRemaining() {
    return this.todos.length;
  }

}
