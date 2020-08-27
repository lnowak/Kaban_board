import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import './../sass/style.scss';

import Header from './components/Header/header';
import Board from './components/Board/board';

class Kanban extends Component {
    state = {
        board: [{
            boardName: 'Lista 1',
            boardId: 1,
            boardShortcutActive: false,
            backlogActive: false,
            boardCol: [
                {id: 1, name: 'Sprint Backlog'},
                {id: 2, name: 'In progress'},
                {id: 3, name: 'QA'},
                {id: 4, name: 'Bug report'},
                {id: 5, name: 'Done'},
            ],
        },],
        menuActive: false,
    }

    handleBoardElementActive = () => {
            this.setState({menuActive: !this.state.menuActive});
    }

    showItemsList = () => {
        let newBoardShortcutActive = this.state.board.map(e => {
            e.boardShortcutActive = !e.boardShortcutActive
            return e
        });
        this.setState({boardShortcutActive: newBoardShortcutActive})
    }

    showBacklog = e => {
        let newbacklogActive = this.state.board.map(e => {
            return e.backlogActive = !e.backlogActive
            // return e
        });
        this.setState({backlogActive: newbacklogActive});
        this.showItemsList();
    }

    render() {
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} showItemsList={this.showItemsList} showBacklog={this.showBacklog} />
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById("app"));
});