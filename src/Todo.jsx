import React from 'react';
import {observer} from "mobx-react"

class Todo extends React.Component{

    render(){
        return(
            <div>
            {
                this.props.store.todoList.map((item)=>{
                    return (<li>{item}</li>)
                })
            }
            <br/>
            <div>Total Todos Added are : {this.props.store.totalTodos}</div>
            </div>

        )
    }
}

Todo = observer(Todo)

export default Todo;