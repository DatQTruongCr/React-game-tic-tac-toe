import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderSquare(i) {
        return (
            <div>
                <Square
                    value={this.props.value[i]}
                    onClick={() => {
                        this.props.onClick(i);
                    }} />
            </div>
        )
    }

    render() {
        return (
            <>
                <div className='board-behind'>
                    <div className='board-row'>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>

                    <div className='board-row'>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>

                    <div className='board-row'>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>  
            </>
        )
    }
}
