import React, { Component } from 'react'

export default class Square extends Component {
    render() {
        return (
            <div>
                <button className="Square" onClick= {() => {
                    console.log('click me');
                }}> {this.props.value} </button> 
            </div>

        )
    }
}
