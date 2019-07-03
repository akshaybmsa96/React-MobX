import React from 'react';

class Actions extends React.Component {

    clearList=()=>{
        this.props.store.clearList();
    }

    addTodo=()=>{

        let todo=document.getElementById("inputBox").value;
        this.props.store.pushTodo(todo);
        document.getElementById("inputBox").value="";
    }

    render() {
        return (
            <div>
                <input placeholder="Enter Todo" id="inputBox"></input>
                <button onClick={this.addTodo}>Add todo</button>
                <button onClick={this.clearList}>Remove Todo</button>
            </div>
        )
    }
}

export default Actions;