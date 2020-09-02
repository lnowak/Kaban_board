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
            boardShortcutEditActive: false,
            boardCol: [
                {id: 1, name: 'Project Backlog'},
                {id: 2, name: 'Sprint Backlog'},
                {id: 3, name: 'In progress'},
                {id: 4, name: 'QA(testing)'},
                {id: 5, name: 'Bug report'},
                {id: 6, name: 'Done'},
            ],
        },],
        menuActive: false,
    }

    handleBoardElementActive = () => {
        this.setState({menuActive: !this.state.menuActive});
    }
    
    showItemsList = (e) => {
        let id = Number(e);
        let newBoardShortcutActive = this.state.board.map(e => {
            if (id === e.boardId) {
                e.boardShortcutActive = !e.boardShortcutActive; 
            }
            return e
        });
        this.setState({board: newBoardShortcutActive});
    }
    
    handleEditListItem = (e) => {
        let id = Number(e);
        let editActive = this.state.board.map(e => {
            if (id === e.boardId) {
                e.boardShortcutEditActive = true; 
            }
            return e
        })
        this.setState({board: editActive})
    }
    
    addNewList = () => {
        const newList = {
            boardName: `Lista ${this.state.board.length+1}`,
            boardId: this.state.board.length+1,
            boardShortcutActive: false,
            boardShortcutEditActive: false,
            boardCol: [],
        };
        this.setState({
            board: [...this.state.board, newList],
        })
    }

    render() {
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} showItemsList={this.showItemsList} handleEditListItem={this.handleEditListItem} addNewList={this.addNewList} />
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById("app"));
});