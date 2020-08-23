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

    handleBoardElementActive = buttonId => {
        if (buttonId === 1) {
            this.setState({menuActive: !this.state.menuActive});
        } else if (buttonId === 2) {
            this.setState({userActive: !this.state.userActive});
        }
    }

    render() {
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state}/>
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});