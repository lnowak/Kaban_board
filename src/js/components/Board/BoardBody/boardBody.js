import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class BoardBody extends Component {

    addNewColumn = () => {
        this.props.addNewColumn();
    }

    render() {

        
        
        let asa = this.props.boardState.board.map(e=> {
            return (e.boardCol.map(item => {return <li data-id={item.id} key={item.id} className={`boardBody__column ${e.boardBodyActive ? '' : 'none'} ` }>{item.name}</li>}))
        })

        let list = <ul>
            {asa}
            <li className={`${this.props.boardState.board.length > 0 ? 'boardBody__column' : 'none' }`} onClick={this.addNewColumn}>Dodaj nową kartę</li>
        </ul>

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive ? 'board__body--active' : ''} `}>
                <ul>
                    {list}
                     
                </ul>
            </div>
        )
    }
}

export default BoardBody;