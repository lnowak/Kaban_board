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
            boardNewName: '',
            boardBodyActive: true,
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
                e.boardShortcutEditActive = !e.boardShortcutEditActive; 
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
            boardNewName: '',
            boardBodyActive: false,
            boardCol: [],
        };
        this.setState({board: [...this.state.board, newList]})
    }

    backgroundOff = (e) => {
        let id = Number(e.target.dataset.id);
        const newBoard = this.state.board.map(item => {
            if (id === item.boardId) {
                item.boardShortcutActive = !item.boardShortcutActive;
                item.boardShortcutEditActive = false;
                item.boardNewName = '';
            }
            return item
        })
        this.setState({board: newBoard})
    }

    listNameChange = (id, value) => {
        let newBoard = this.state.board.map(e => {
            if(Number(id) === e.boardId) {
                e.boardNewName = value;
            }
            return e
        })
        this.setState({board: newBoard})
    }

    listNameSubmit = (e, id) => {
        e.preventDefault();
        let newBoard = this.state.board.map(item => {
            if (Number(id) === item.boardId && item.boardNewName.length > 0) {
                item.boardName = item.boardNewName;
                item.boardShortcutEditActive = false;
                item.boardShortcutActive = false;
                item.boardNewName = '';
            }
            return item
        });
        this.setState({board: newBoard});
    }

    listRemove = (e, id) => {
        e.preventDefault();
        const newBoard = this.state.board.filter(item => {
            if (Number(id) !== item.boardId) {
                item.boardId !== item.boardId
                return item
            }
        })
        this.setState({board: newBoard});
    }

    showListBody = (id) => {
        const newBoard = this.state.board.map( item => {
            if (Number(id) === item.boardId) {
                item.boardBodyActive = true
            } else {
                item.boardBodyActive = false
            }
            return item
        })
        this.setState({board: newBoard});
        console.log(this.state.board);
    }

    addNewColumn = () => {
        const newCol = {
            id: this.state.board.map(e => e.boardCol.length+1)[0],
            name: 'dsa'
        };
        const newBoard = this.state.board.map(e => {
            e.boardCol = [...e.boardCol, newCol]
            return e
        })
        this.setState({board: newBoard})
    }

    render() {
        const background = this.state.board.map(item => {
            return <div key={item.boardId} data-id={item.boardId} className={`${item.boardShortcutEditActive ? 'fullscreen__background' : 'none' }`} onClick={this.backgroundOff}></div>
        });
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} showItemsList={this.showItemsList} handleEditListItem={this.handleEditListItem} addNewList={this.addNewList} listNameChange={this.listNameChange} listNameSubmit={this.listNameSubmit} listRemove={this.listRemove} showListBody={this.showListBody} addNewColumn={this.addNewColumn} />
                {background}
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById("app"));
});