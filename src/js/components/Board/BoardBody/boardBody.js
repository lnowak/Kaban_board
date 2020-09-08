import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class BoardBody extends Component {

    addNewColumn = () => {
        this.props.addNewColumn();
    }

    openNewInputAddForm = e => {
        const boardId = e.target.dataset.boardid;
        const id = e.target.dataset.id
        this.props.openNewInputAddForm(id, boardId);
    }

    newColumnItemInputChange = e => {
        const id = e.target.dataset.id;
        const value = e.target.value;
        this.props.newColumnItemInputChange(id, value);
    }

    newColumnItemNameSave = e => {
        this.props.newColumnItemNameSave(e);
    }

    render() {
        let list = this.props.boardState.board.map(e=> {
            return (e.boardCol.map(item => {
                // console.log(e, item)
                let list = item.tasks.map(ie => <li key={ie.id} className='test12' >{ie.taskName}</li>);
                // console.log(item);
                let button;
                if(!item.openNewInputAddForm) {
                    button = <li className={`test12`} data-boardid={e.boardId} data-id={item.id} onClick={this.openNewInputAddForm}>Dodaj nowy element</li>;
                } else {
                    button = (
                        <form onSubmit={this.newColumnItemNameSave}>
                            <input data-id={item.id} placeholder='Podaj tytuł karty' value={item.newTask} onChange={this.newColumnItemInputChange}/>
                            <div className='buttons'>
                                <input data-id={item.id} type='submit' value='Dodaj'/>
                                <input data-id={item.id} type='submit' value='Zakmnij'/>
                            </div>
                        </form>
                    )
                }
                return (
                    <li data-id={item.id} key={`${item.id}`} className={`boardBody__column ${e.boardBodyActive ? '' : 'none'} ` }>
                        <span>{item.name}</span>
                        <ul className='testlist1'>
                            <li>
                                <ul className='testlist2'>
                                    {list}
                                </ul>
                            </li>
                            {button}
                            {/* <li className={`test12`} data-id={item.id} onClick={this.openNewInputAddForm}>Dodaj nowy element</li> */}
                        </ul>
                    </li>
                )
            }))
        })

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive ? 'board__body--active' : ''} `}>
                <ul>
                    {list}
                    <li className={`${this.props.boardState.board.length > 0 ? 'boardBody__column' : 'none' }`} onClick={this.addNewColumn}>Dodaj nową kartę</li>
                </ul>
            </div>
        )
    }
}

export default BoardBody;