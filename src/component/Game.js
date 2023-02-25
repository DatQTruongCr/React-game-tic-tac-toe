import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
        this.turnBackArray = [];
        this.checkPlayer = true;
        this.checkBackStep = true;
    }

    turnPlay(array, indexShow, iconPlay) {
        array[indexShow] = iconPlay;
        this.checkPlayer = !this.checkPlayer;
        this.checkBackStep = true;
    }

    handleClick(index) {
        if (this.state.squares[index] === null) {
            let newSquares = this.state.squares.slice();
            this.turnBackArray = this.state.squares;

            if (this.checkPlayer) {
                this.turnPlay(newSquares, index, 'X');
            } else {
                this.turnPlay(newSquares, index, 'O');
            }

            this.setState({ squares: newSquares });
            console.log(newSquares);
        }
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
                <Board 
                    value = {this.state.squares}
                    onClick = {(i) => {
                        this.handleClick(i)
                    }}
                />
            </>
        )
    }
}
