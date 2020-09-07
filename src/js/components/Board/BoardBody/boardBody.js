import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class BoardBody extends Component {

    addNewColumn = () => {
        this.props.addNewColumn();
    }

    render() {
        let list = this.props.boardState.board.map(e=> {
            return (e.boardCol.map(item => {
                console.log(item.tasks.map(ie => ie.taskName))
                let list = item.tasks.map(ie => <li key={ie.id}>{ie.taskName}</li>)
                return (
                    <li data-id={item.id} key={`${item.id}`} className={`boardBody__column ${e.boardBodyActive ? '' : 'none'} ` }>
                        {item.name}
                        <ul className='testlist'>
                            <li>
                                <ul className='testlist'>
                                    {list}
                                </ul>
                            </li>
                            <li>Dodaj nowy element</li>
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