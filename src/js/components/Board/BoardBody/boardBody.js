import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import BacklogCard from "../BacklogCard/backlogCard"

class BoardBody extends Component {
    render() {

        let list = this.props.boardState.board.map(item=> {
            return item.boardCol.map(item => {return <li data-id={item.id} key={item.id} className='boardBody__column'>{item.name}</li>})
        })

        // let 

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive ? 'board__body--active' : 'board__body--disactive'} `}>
                <ul>
                    {list}
                    <li className='boardBody__column'>Dodaj nową kartę</li> 
                </ul>
                <BacklogCard boardState={this.props.boardState} />
            </div>
        )
    }
}

export default BoardBody;