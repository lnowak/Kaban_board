import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class UserInfo extends Component {
    render() {
        let userActive = this.props.boardState.userActive;
        return (
            <div className={`board__section board__userInfo ${userActive ? 'board__shortcuts--active' : 'board__shortcuts--disactive'}`}>
                Jam użytkownikiem
            
            </div>
        )
    }
}

export default UserInfo;