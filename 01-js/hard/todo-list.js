/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
 
  todoList =[];

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    if (index < this.todoList.length) {
      this.todoList[index]  = updatedTodo;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if(0<=indexOfTodo && indexOfTodo < this.todoList.length) {
      return this.todoList[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todoList = [];
  }
}


let newList = new Todo();
newList.add(2);
newList.add(3);
newList.add(4);
newList.add(56);

newList.update(3,4);


console.log(newList);

module.exports = Todo;
