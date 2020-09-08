import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import Shortcuts from './Shortcuts/shortcuts';
import BoardBody from './BoardBody/boardBody';

class Board extends Component {
    render() {
        return (
            <div className='board'>
                <Shortcuts boardState={this.props.boardState} showItemsList={this.props.showItemsList} handleEditListItem={this.props.handleEditListItem} addNewList={this.props.addNewList} listNameChange={this.props.listNameChange} listNameSubmit={this.props.listNameSubmit} listRemove={this.props.listRemove} showListBody={this.props.showListBody} />
                <BoardBody boardState={this.props.boardState} addNewColumn={this.props.addNewColumn} openNewInputAddForm={this.props.openNewInputAddForm} newColumnItemInputChange={this.props.newColumnItemInputChange} newColumnItemNameSave={this.props.newColumnItemNameSave}/>
            </div>
        )
    }
}

export default Board;