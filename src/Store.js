import { decorate, configure , observable, action, computed } from "mobx";

configure({ enforceActions: true })

class Store {
    todoList = ["Eat", "Sleep"]

    clearList() {
        this.todoList = []
    }

    pushTodo(e) {
        this.todoList.push(e)
    }

    get totalTodos() {
        return this.todoList.length;
    }
}

decorate(Store, {
    todoList: observable,
    clearList: action,
    pushTodo: action,
    totalTodos: computed
})

export default Store;