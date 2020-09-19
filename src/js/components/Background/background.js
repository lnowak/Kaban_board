import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class Background extends Component {

    backgroundOff = (e) => {
        this.props.backgroundOff(e);
    }

    render() {
        return (
            <div className={`${this.props.state.backgroundActive ? 'fullscreen__background' : 'none'}`} onClick={this.backgroundOff}>
                <div className={`${this.props.state.editItemActive ? 'sth' : 'none'}`}></div>
            </div>
        )
    }
}

export default Background;