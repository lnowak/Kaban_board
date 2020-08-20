import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import './../sass/style.scss';

import Header from './components/Header/header';
import Board from './components/Board/board';

class Kaban extends Component {
    state = {
        boardCol: [
            {id: 1, name: 'Sprint Backlog'},
            {id: 2, name: 'In progress'},
            {id: 3, name: 'QA'},
            {id: 4, name: 'Bug report'},
            {id: 5, name: 'Done'}
        ]
    }
    
    createBoardCol = () => {
        console.log('coś działa')
    }

    render() {
        return (
            <>
                <Header  />
                <Board sendedState={this.state.boardCol}/>
            </>
        )
    }
}
const App = () => <Kaban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});