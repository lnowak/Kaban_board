import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class Background extends Component {

    backgroundOff = (e) => {
        this.props.backgroundOff(e);
    }

    render() {
        const name = this.props.state.board.map( item1 => {
            if (item1.boardBodyActive) {
                return item1.boardCol.map( item2 => {
                    return item2.tasks.map(item3 => {
                        if(item3.detailedDescriptionOpen) {
                            return item3.taskName
                        }
                    });
                })
            }
        });

        return (
            <div className={`${this.props.state.backgroundActive ? 'fullscreen__background' : 'none'}`} onClick={this.backgroundOff}>
                <div className={`${this.props.state.editItemActive ? 'detailed__description' : 'none'}`}>
                    <header className='detailed__description__header'>
                        <h1 className='detailed__description__header__title'>{name}</h1>
                        <button className='detailed__description__header__closeButton' onClick={this.backgroundOff}>X</button>
                    </header>
                    <section className='detailed__description__body'>
                        <div className='detailed__description__body__mainCol'>
                            <div className='card__detail'>
                                <div className='card__detail__labels'></div>
                            </div>
                            <div className='card__detail__description'>

                            </div>
                            <div className='card__detail__checklist'>

                            </div>
                        </div>
                        <div className='detailed__description__body__sidebar'>
                            <div className='card__adds'>

                            </div>
                            <div className='card__actions'></div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Background;