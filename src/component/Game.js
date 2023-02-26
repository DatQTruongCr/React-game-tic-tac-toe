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
            // squares: Array(9).fill(null),
            //issue after changes from squares to historyArray ?
            //have many array we have know exacly curent aray for display.
            historyArray: [{ squares: Array(9).fill(null) }]
        };
        this.xisNext = true;
    }

    handleClick(index) {
        const history = this.state.historyArray;
        const currentArray = history[history.length - 1].squares;
        if ((currentArray[index] === null) && (!theWaysToWin(currentArray))) {
            let newSquares = currentArray.slice();
            newSquares[index] = this.xisNext ? 'X' : 'O';
            this.xisNext = !this.xisNext;
            this.setState({
                historyArray: history.concat([{
                    squares: newSquares
                }])
            });
        }
    }   

    render() {
        const history = this.state.historyArray;
        const currentArray = history[history.length - 1].squares
        let winner = theWaysToWin(currentArray);
        let status;
        if (winner) {
            // eslint-disable-next-line no-unused-vars
            status = `Winner  ${winner}`;
        } else {
            // eslint-disable-next-line no-unused-vars
            status = `Next player ${this.xisNext ? 'X' : 'O'}`;
        }

        return (
            <>
                <div className='game-body'>
                    <div className='show-notification'>
                        {status}
                    </div>
                    <div className='board'>
                        <Board
                            value={currentArray}
                            onClick={(i) => {
                                this.handleClick(i)
                            }}
                        />
                    </div>
                </div>
            </>
        )
    }
}
