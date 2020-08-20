import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class BoardBody extends Component {
    render() {

        // console.log(this.props.sendedState);
        let list = this.props.sendedState.map(e=> {
            console.log(e);
            return(
                <li data-id={e.id} key={e.id} className='boardBody__column'>
                    {e.name}
                    <div>lorem20</div>
                    
                </li>
            )
        })
        return (
            <div className='board__section board__body'>
                <ul>
                    {list}   
                </ul>
            </div>
        )
    }
}

export default BoardBody;