import React, { Component } from "react";
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
                {
                    id: 1,
                    name: 'Project Backlog',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'Podstawowa konfiguracja',
                        },
                    ],
                    newTask: '',
                },
                {
                    id: 2,
                    name: 'Sprint Backlog',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'nazwa'
                        }
                    ],
                    newTask: '',
                },
                {
                    id: 3,
                    name: 'In progress',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'nazwa'
                        }
                    ],
                    newTask: '',
                },
                {
                    id: 4,
                    name: 'QA (Testing)',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'nazwa'
                        }
                    ],
                    newTask: '',
                },
                {
                    id: 5,
                    name: 'Bug report',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'nazwa'
                        }
                    ],
                    newTask: '',
                },
                {
                    id: 6,
                    name: 'Done',
                    openNewInputAddForm: false,
                    tasks: [
                        {
                            id: 1,
                            taskName: 'nazwa'
                        }
                    ],
                    newTask: '',
                },
            ],
        },],
        menuActive: false,
    }

    handleBoardElementActive = () => {
        this.setState({ menuActive: !this.state.menuActive });
    }

    showItemsList = (e) => {
        let id = Number(e);
        let newBoardShortcutActive = this.state.board.map(e => {
            if (id === e.boardId) {
                e.boardShortcutActive = !e.boardShortcutActive;
            }
            return e
        });
        this.setState({ board: newBoardShortcutActive });
    }

    handleEditListItem = (e) => {
        let id = Number(e);
        let editActive = this.state.board.map(e => {
            if (id === e.boardId) {
                e.boardShortcutEditActive = !e.boardShortcutEditActive;
            }
            return e
        })
        this.setState({ board: editActive })
    }

    addNewList = () => {
        const newList = {
            boardName: `Lista ${this.state.board.length + 1}`,
            boardId: this.state.board.length + 1,
            boardShortcutActive: false,
            boardShortcutEditActive: false,
            boardNewName: '',
            boardBodyActive: false,
            boardCol: [],
        };
        this.setState({ board: [...this.state.board, newList] })
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
        this.setState({ board: newBoard })
    }

    listNameChange = (id, value) => {
        let newBoard = this.state.board.map(e => {
            if (Number(id) === e.boardId) {
                e.boardNewName = value;
            }
            return e
        })
        this.setState({ board: newBoard })
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
        this.setState({ board: newBoard });
    }

    listRemove = (e, id) => {
        e.preventDefault();
        const newBoard = this.state.board.filter(item => {
            if (Number(id) !== item.boardId) {
                item.boardId !== item.boardId
                return item
            }
        })
        this.setState({ board: newBoard });
    }

    showListBody = (id) => {
        const newBoard = this.state.board.map(item => {
            if (Number(id) === item.boardId) {
                item.boardBodyActive = true
            } else {
                item.boardBodyActive = false
            }
            return item
        })
        this.setState({ board: newBoard });
    }

    addNewColumn = () => {
        const newCol = {
            id: this.state.board[Number(this.state.board.length)-1].boardCol.length+1,
            name: 'dsa',
            tasks: [],
            newTask: ''
        };
        console.log(this.state.board[Number(this.state.board.length)-1].boardCol.length)
        const newBoard = this.state.board.map(e => {
            if (e.boardBodyActive) {
                e.boardCol = [...e.boardCol, newCol]
            }
            return e
        })
        this.setState({ board: newBoard });
    }

    openNewInputAddForm = (id, boardId) => {
        const newBoard = this.state.board.map(item1 => {
            if (Number(boardId) === item1.boardId) {
                item1.boardCol.map(item2 => {
                    // console.log(item2.id, id, boardId, item1.boardId)
                    if (Number(id) === item2.id) {
                        item2.openNewInputAddForm = !item2.openNewInputAddForm;
                    }
                    return item2
                })
            }
            return item1
        });
        this.setState({ board: newBoard })
    }

    newColumnItemInputChange = (id, value) => {
        const newBoard = this.state.board.map(item1 => {
            item1.boardCol.map(item2 => {
                if (Number(id) === item2.id) {
                    item2.newTask = value;
                }
                return item2
            });
            return item1
        });
        this.setState({ board: newBoard })
    }

    newColumnItemNameSave = (e, id) => {
        e.preventDefault();
        const newColumnItem = {
            id: Number(this.state.board[Number(this.state.board.length)-1].boardCol.length),
            taskName: this.state.board.map(item1 => { item1.boardCol.map(item2 => item2.newTask) })
        }
        let a = this.state.board.map(i1 => {
            if (Number(id) === i1.boardId) {
                i1.boardCol.map(i2 => {
                    if (Number(id) === i2.id) {
                        return i2.newTask
                    }
                })
            }
        })
        console.log(a, id, this.state.board[Number(this.state.board.length)-1].boardCol.length);
        const newBoard = this.state.board.map(item1 => {
            item1.boardCol.map(item2 => {
                item2.tasks = [...item2.tasks, newColumnItem];
                return item2
            })
            return item1
        })
        this.setState({board: newBoard})
    }

    render() {
        const background = this.state.board.map(item => {
            return <div key={item.boardId} data-id={item.boardId} className={`${item.boardShortcutEditActive ? 'fullscreen__background' : 'none'}`} onClick={this.backgroundOff}></div>
        });
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} showItemsList={this.showItemsList} handleEditListItem={this.handleEditListItem} addNewList={this.addNewList} listNameChange={this.listNameChange} listNameSubmit={this.listNameSubmit} listRemove={this.listRemove} showListBody={this.showListBody} addNewColumn={this.addNewColumn} openNewInputAddForm={this.openNewInputAddForm} newColumnItemInputChange={this.newColumnItemInputChange} newColumnItemNameSave={this.newColumnItemNameSave} />
                {background}
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById("app"));
});