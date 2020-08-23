import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class BoardBody extends Component {
    render() {

        let list = this.props.boardState.boardCol.map(e=> {
            // console.log(e);
            return(
                <li data-id={e.id} key={e.id} className='boardBody__column'>
                    {e.name}
                    
                </li>
            )
        })

        return (
            <div className={`board__section board__body ${this.props.boardState.menuActive || this.props.boardState.userActive ? 'board__body__one--active' : 'board__body--disactive'} ${(this.props.boardState.menuActive && this.props.boardState.userActive ? 'board__body__both--active' : '')} `}>
                <ul>
                    {list}
                    <li className='boardBody__column'>Dodaj nową kartę</li>  
                </ul>
            </div>
        )
    }
}
// (this.props.boardState.menuActive && this.props.boardState.userActive ? 'board__body__both--active' : 'board__body--disactive')
export default BoardBody;