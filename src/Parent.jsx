import React from 'react';
import Todo from './Todo';
import Store from "./Store";
import Actions from './Actions';

const appStore = new Store();

class Parent extends React.Component {

    render() {
        return (
            <div>
                <h2>This is a Todo-App using MobX</h2>
                <Actions store={appStore} />
                <Todo store={appStore} />
            </div>
        )
    }
}

export default Parent;