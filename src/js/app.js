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
            return e.boardShortcutActive = !e.boardShortcutActive
        });
        this.setState({
            boardShortcutActive: newBoardShortcutActive,
        })
    }

    render() {
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} showItemsList={this.showItemsList} />
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});