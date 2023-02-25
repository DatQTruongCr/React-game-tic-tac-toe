import React, { Component } from 'react'
import Board from './Board';

function theWaysToWin(squares) {
    const allWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < allWin.length; i++) {
        const [a, b, c] = allWin[i];
        if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
            return squares[a];
        }
    }
    return null;
}

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
        this.turnBackArray = [[this.state.squares]];
        this.xisNext = true;
    }

    handleClick(index) {
        if ((this.state.squares[index] === null) && (!theWaysToWin(this.state.squares))) {
            let newSquares = this.state.squares.slice();
            newSquares[index] = this.xisNext ? 'X' : 'O';
            this.xisNext = !this.xisNext;
            this.setState({ squares: newSquares });
        }
    }

    render() {
        let winner = theWaysToWin(this.state.squares);
        console.log(winner);
        let status;
        if (winner) {
            // eslint-disable-next-line no-unused-vars
            status = `winner:  ${winner}`;
        } else {
            // eslint-disable-next-line no-unused-vars
            status = `nexPlayer  ${this.xisNext ? 'X' : 'O'}`;
        }

        return (
            <>
                <Board
                    value={this.state.squares}
                    onClick={(i) => {
                        this.handleClick(i)
                    }}
                />
                <div>
                    {status}
                </div>
            </>
        )
    }
}
