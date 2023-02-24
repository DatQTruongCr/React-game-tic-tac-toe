import React, { Component } from 'react'
import Square from './Square'

export default class Board
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
        this.turnBackArray = [];
        this.checkPlayer = true;
        this.checkBackStep = true;
    }

    turnPlay(array,indexShow,iconPlay) {
        array[indexShow] = iconPlay;
        this.checkPlayer = !this.checkPlayer;
        this.checkBackStep = true;
    }

    handleClick(index) {
        if (this.state.squares[index] === null) {
            let newSquares = this.state.squares.slice();
            this.turnBackArray = this.state.squares;
            if (this.checkPlayer) {
                this.turnPlay(newSquares,index,'X');
            } else {
                this.turnPlay(newSquares,index,'O');
            }
            this.setState({ squares: newSquares });
        }
    }

    renderSquare(i) {
        return (
            <div>
                <Square
                    value={this.state.squares[i]}
                    onClick={() => {
                        this.handleClick(i);
                    }} />
            </div>
        )
    }

    Turnback(array) {
        if (this.checkBackStep) {
            this.setState({ squares: array });
            this.checkPlayer = !this.checkPlayer;
            this.checkBackStep = !this.checkBackStep;
        }
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

                <button onClick={() => {
                    this.Turnback(this.turnBackArray);
                }}>Re-Step</button>

            </>
        )
    }

}
