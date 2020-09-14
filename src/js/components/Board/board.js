import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import Shortcuts from './Shortcuts/shortcuts';
import BoardBody from './BoardBody/boardBody';

class Board extends Component {
    render() {
        return (
            <div className='board'>
                <Shortcuts boardState={this.props.boardState} handleEditListItem={this.props.handleEditListItem} addNewList={this.props.addNewList} listNameChange={this.props.listNameChange} listNameSubmit={this.props.listNameSubmit} listRemove={this.props.listRemove} showListBody={this.props.showListBody} />
                <BoardBody boardState={this.props.boardState} addNewColumnForm={this.props.addNewColumnForm} colNameChange={this.props.colNameChange} addNewColumn={this.props.addNewColumn} openNewInputAddForm={this.props.openNewInputAddForm} closeNewInputAddForm={this.props.closeNewInputAddForm} newColumnItemInputChange={this.props.newColumnItemInputChange} newColumnItemNameSave={this.props.newColumnItemNameSave} newColumnItemNameCancel={this.props.newColumnItemNameCancel} />
            </div>
        )
    }
}

export default Board;