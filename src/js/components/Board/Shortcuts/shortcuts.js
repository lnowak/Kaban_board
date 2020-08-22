import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class Shortcuts extends Component {
    render() {
        let menuActive = this.props.boardState.menuActive;
        return (
        <div className={`board__section board__shortcuts ${menuActive ? 'board__shortcuts--active' : 'board__shortcuts--disactive'}`} >
            <div>Project backlog</div>
        </div>
        )
    }
}

export default Shortcuts;