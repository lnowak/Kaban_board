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
            <div className='board__section board__body'>
                <ul>
                    {list}
                    <li className='boardBody__column'>Dodaj nową kartę</li>  
                </ul>
            </div>
        )
    }
}

export default BoardBody;