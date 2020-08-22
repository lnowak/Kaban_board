import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import './../sass/style.scss';

import Header from './components/Header/header';
import Board from './components/Board/board';

class Kanban extends Component {
    state = {
        boardCol: [
            {id: 1, name: 'Sprint Backlog'},
            {id: 2, name: 'In progress'},
            {id: 3, name: 'QA'},
            {id: 4, name: 'Bug report'},
            {id: 5, name: 'Done'}
        ],
        menuActive: false,
        userActive: false,
    }
    
    createBoardCol = () => {
        console.log('coś działa')
    }

    handleMenuActive = () => {
        console.log('kliknąłem działa');
        this.setState({
            menuActive: !this.state.menuActive,
        });
        console.log(this.state.menuActive);
    }

    render() {
        return (
            <>
                <Header handleMenuActive={this.handleMenuActive} headerState={this.state} />
                <Board boardState={this.state}/>
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});