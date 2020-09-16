import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class BoardBody extends Component {

    addNewColumnForm = (e) => {
        this.props.addNewColumnForm(e);
    }

    colNameChange = (e) => {
        const value = e.target.value;
        this.props.colNameChange(value);
    }

    addNewColumn = (e) => {
        this.props.addNewColumn(e);
    }

    openNewInputAddForm = e => {
        const boardId = e.target.dataset.boardid;
        const id = e.target.dataset.id;
        this.props.openNewInputAddForm(id, boardId);
    }

    closeNewInputAddForm = e => {
        this.props.closeNewInputAddForm(e);
    }

    newColumnItemInputChange = e => {
        const value = e.target.value;
        this.props.newColumnItemInputChange(value);
    }

    newColumnItemNameSave = e => {
        const id = e.target.dataset.id;
        const boardId = e.target.dataset.boardid;
        this.props.newColumnItemNameSave(e, id, boardId);
    }

    newColumnItemNameCancel = e => {
        const id = e.target.dataset.id;
        this.props.newColumnItemNameCancel(e, id);
    }

    cancelActions = (e) => {
        this.props.cancelActions(e)
    }

    columnFormOpen = e => {
        this.props.columnFormOpen(e);
    }

    render() {
        const list = this.props.boardState.board.map(e=> {
            return (e.boardCol.map(item => {

                const list = item.tasks.map(ie => <li key={ie.id} className='test12' >{ie.taskName}</li>);
                let button;
                if(!item.openNewInputAddForm) {
                    button = <li className={`test12`} data-boardid={e.boardId} data-id={item.id} onClick={this.openNewInputAddForm}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>Dodaj nowy element</li>;
                } else {
                    button = (
                        <form className='form' data-id={item.id} data-boardid={e.boardId}onSubmit={this.newColumnItemNameSave}>
                            <textarea className='input_text' data-id={item.id} type='text' placeholder='Podaj tytuł karty' value={this.props.boardState.newTask} onChange={this.newColumnItemInputChange}/>
                            <div className='buttons'>
                                <input data-id={item.id} type='submit' value='Dodaj'/>
                                <input data-id={item.id} data-boardid={e.boardId} type='submit' value='Zakmnij' onClick={this.closeNewInputAddForm}/>
                            </div>
                        </form>
                    )
                }

                let name;
                if (!this.props.boardState.boardColNameFormActive) {
                    name = <span data-id={item.id} className='boardBody__column__name' onClick={this.columnFormOpen}>{item.name}</span>
                } else {
                    name = <form className='form' data-id={item.id} data-boardid={e.boardId}onSubmit={this.newColumnItemNameSave}>
                        <textarea className='input_text' data-id={item.id} type='text' value={this.props.boardState.newTask} onChange={this.newColumnItemInputChange}/>
                    </form>
                }

                return (
                    <li data-id={item.id} key={`${item.id}`} className={`boardBody__column ${e.boardBodyActive ? '' : 'none'} ` }>
                        {/* <span className='boardBody__column__name' onClick={this.columnFormOpen}>{item.name}</span> */}
                        {name}
                        <ul className='testlist1'>
                            <li>
                                <ul className='testlist2'>
                                    {list}
                                </ul>
                            </li>
                            {button}
                        </ul>
                    </li>
                )
            }))
        })

        let newColButton;
        if (this.props.boardState.boardAddColFormAcvite) {
            newColButton = <form onSubmit={this.addNewColumn} className='boardBody__column'>
                <textarea className='input_text' onChange={this.colNameChange} value={this.props.boardState.newColName}/>
                <div className='buttons'>
                    <input type='submit' value='Dodaj'/>
                    <input type='submit' value='Zakmnij' onClick={this.newColumnItemNameCancel}/>
                </div>
            </form>
        } else {
            newColButton = <li className={`${this.props.boardState.board.length > 0 ? 'boardBody__column test123' : 'none' }`} onClick={this.addNewColumnForm}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>Dodaj nową kartę</li>
        }

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive ? 'board__body--active' : ''} `}>
                <ul className='lis' onClick={this.cancelActions} >
                    {list}
                    {newColButton}
                </ul>
            </div>
        )
    }
}

export default BoardBody;