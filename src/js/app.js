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
            boardShortcutEditActive: false,
            boardNewName: '',
            boardBodyActive: true,
            boardCol: [
                {
                    id: 1,
                    name: 'Project Backlog',
                    openNewInputAddForm: false,
                    boardColNameFormActive: false,
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
                    boardColNameFormActive: false,
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
                    boardColNameFormActive: false,
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
                    boardColNameFormActive: false,
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
                    boardColNameFormActive: false,
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
                    boardColNameFormActive: false,
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
        newTask: '',
        newColName: '',
        boardAddColFormAcvite: false,
        // boardColNameFormActive: false,
    }

    handleBoardElementActive = () => {     
        const newBoard = this.state.board.map(item1 => {
            item1.boardCol.map(item2 => {
                item2.openNewInputAddForm = false;
                return item2
            })
            return item1
        })
        this.setState({
            board: newBoard,
            menuActive: !this.state.menuActive,
            newTask: '',
            newColName: '',
            boardAddColFormAcvite: false,
        });
    }

    handleEditListItem = (e) => {
        let id = Number(e);
        let editActive = this.state.board.map(e => {
            if (id === e.boardId) {
                e.boardShortcutEditActive = true;
                e.boardNewName = e.boardName;
            }
            return e
        })
        this.setState({ board: editActive })
    }

    addNewList = () => {
        const newList = {
            boardName: `Lista ${this.state.board.length > 0 ? this.state.board[this.state.board.length-1].boardId+1 : 1}`,
            boardId: this.state.board.length > 0 ? this.state.board[this.state.board.length-1].boardId+1 : 1,
            boardShortcutEditActive: false,
            boardNewName: '',
            boardBodyActive: false,
            // boardColNameFormActive: false,
            boardCol: [],
        };
        this.setState({ board: [...this.state.board, newList] })
    }

    backgroundOff = (e) => {
        let id = Number(e.target.dataset.id);
        const newBoard = this.state.board.map(item => {
            if (id === item.boardId) {
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
                item.boardCol.map(item2 => {
                    item2.boardColNameFormActive = false;
                })
            }
            return item
        })
        this.setState({ 
            board: newBoard,
            boardAddColFormAcvite: false,
        });
    }

    addNewColumnForm = (e) => {
        const newBoard = this.state.board.map(item1 => {
            item1.boardCol.map(item2 => {
                item2.boardColNameFormActive = false;
                return item2
            })
            return item1
        })
        this.setState({
            board: newBoard,
            boardAddColFormAcvite: true,
            newColName: ''
        });
    }

    colNameChange = (value) => {
        this.setState({ newColName: value });
    }

    addNewColumn = (e) => {
        e.preventDefault();
        const newCol = {
            id: this.state.board[Number(this.state.board.length)-1].boardCol.length+1,
            name: this.state.newColName,
            boardColNameFormActive: false,
            tasks: [],
            newTask: ''
        };
        
        const newBoard = this.state.board.map(e => {
            if (e.boardBodyActive && this.state.newColName.length>0) {
                e.boardCol = [...e.boardCol, newCol]
            }
            return e
        })
        this.setState({ 
            board: newBoard,
            newColName: '',
            boardAddColFormAcvite: false,
        });
        if(this.state.newColName.length < 1) {
            this.addNewColumnForm();
        }
        // e.stopPropagation();
    }

    newColumnItemNameCancel = (e) => {
        e.preventDefault();
        this.setState({
            boardAddColFormAcvite: false,
            newColName: '',
        })
    }

    openNewInputAddForm = (id, boardId) => {
        const newBoard = this.state.board.map(item1 => {
            if (Number(boardId) === item1.boardId) {
                item1.boardCol.map(item2 => {
                    if (Number(id) === item2.id) {
                        item2.openNewInputAddForm = !item2.openNewInputAddForm;
                    } else {
                        item2.openNewInputAddForm = false;
                    }
                    return item2
                })
            } else {
                item1.boardCol.map(item2 => {
                    item2.openNewInputAddForm = false;
                    return item2
                })
            }
            return item1
        });
        this.setState({ 
            board: newBoard,
            newTask: '',
        })
    }

    closeNewInputAddForm = (e) => {
        e.preventDefault();
        const newBoard = this.state.board.map(item1 => {
                item1.boardCol.map(item2 => {
                    item2.openNewInputAddForm = false;
                    return item2
                })
            return item1
        });
        this.setState({ 
            board: newBoard,
            newTask: '',
        })
    }

    newColumnItemInputChange = (value) => {
        const newTask = value;
        this.setState({newTask: newTask})
    }

    newColumnItemNameSave = (e, id, boardId) => {
        e.preventDefault();
        const newTask = this.state.newTask;
        const newColumnItem = {
            id: Math.random(),
            // taskName: this.state.board.map(item1 => { item1.boardCol.map(item2 => item2.newTask) })
            taskName: newTask,
        }
        const newBoard = this.state.board.map(item1 => {
            if(Number(boardId) === item1.boardId) {
                item1.boardCol.map(item2 => {
                    if (Number(id) === item2.id && this.state.newTask.length > 0) {
                        item2.tasks = [...item2.tasks, newColumnItem];
                    }
                    return item2
                })
            }
            
            return item1
        });
        this.setState({
            board: newBoard,
            newTask: '',
        });
        if (this.state.newTask.length > 0) {
            this.openNewInputAddForm(id, boardId);
        }
    }

    cancelActions = (e) => {
        if (e.target.className === 'lis') {
            const newBoard = this.state.board.map(item1 => {
                item1.boardCol.map(item2 => {
                    item2.openNewInputAddForm = false;
                    if (item2.boardColNameFormActive && this.state.newColName.length > 0) {
                        item2.boardColNameFormActive = false;
                        item2.name = this.state.newColName;
                    }
                    return item2
                })
                return item1
            })
            this.setState({
                board: newBoard,
                newTask: '',
                boardAddColFormAcvite: false,
                newColName: '',
            })
        }
    }

    columnFormOpen = (id, boardId) => {
        const newBoard = this.state.board.map(item1 => {
            if(item1.boardId === Number(boardId)) {
                item1.boardCol.map(item2 => {
                    if(item2.id === Number(id)) {
                        item2.boardColNameFormActive = true;
                        this.setState({newColName: item2.name})
                    } else {
                        item2.boardColNameFormActive = false;
                    }
                    return item2
                })
            }
            return item1
        })
        this.setState({
            board: newBoard,
            boardAddColFormAcvite: false,
        })
    }

    render() {
        const background = this.state.board.map(item => {
            return <div key={item.boardId} data-id={item.boardId} className={`${item.boardShortcutEditActive ? 'fullscreen__background' : 'none'}`} onClick={this.backgroundOff}></div>
        });
        return (
            <>
                <Header handleBoardElementActive={this.handleBoardElementActive} headerState={this.state} />
                <Board boardState={this.state} handleEditListItem={this.handleEditListItem} addNewList={this.addNewList} listNameChange={this.listNameChange} listNameSubmit={this.listNameSubmit} listRemove={this.listRemove} showListBody={this.showListBody} addNewColumnForm={this.addNewColumnForm} colNameChange={this.colNameChange} addNewColumn={this.addNewColumn} openNewInputAddForm={this.openNewInputAddForm} closeNewInputAddForm={this.closeNewInputAddForm} newColumnItemInputChange={this.newColumnItemInputChange} newColumnItemNameSave={this.newColumnItemNameSave} newColumnItemNameCancel={this.newColumnItemNameCancel} cancelActions={this.cancelActions} columnFormOpen={this.columnFormOpen}/>
                {background}
            </>
        )
    }
}
const App = () => <Kanban />

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById("app"));
});