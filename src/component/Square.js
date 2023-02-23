import React, { Component } from 'react'

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <button className="Square"
                    onClick={() => {
                        console.log('click me');
                        this.setState({value: 'X'})
                    }}> {this.state.value} </button>
            </div>

        )
    }
}
