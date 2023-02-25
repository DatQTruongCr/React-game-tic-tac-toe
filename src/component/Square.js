import React, { Component } from 'react'

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <button className="Square"
                    onClick={() => {
                        console.log('click me');
                        this.props.onClick();
                    }}> {this.props.value} </button>
            </>

        )
    }
}
