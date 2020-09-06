import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class BoardBody extends Component {
    render() {

        let list = this.props.boardState.board.map(item=> {
            return item.boardCol.map(item => {return <li data-id={item.id} key={item.id} className='boardBody__column'>{item.name}</li>})
        })

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive ? 'board__body--active' : ''} `}>
                <ul>
                    {list}
                    <li className='boardBody__column'>Dodaj nową kartę</li> 
                </ul>
            </div>
        )
    }
}

export default BoardBody;