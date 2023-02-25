// import React, { Component } from 'react'

//way 1: use class component
// export default class Square extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <>
//                 <button className="Square"
//                     onClick={() => {
//                         console.log('click me');
//                         this.props.onClick();
//                     }}> {this.props.value} </button>
//             </>

//         )
//     }
// }

//way 2: use function component
export default function Square(props) {
  return (
    <>
    <button className='Square' onClick={props.onClick}>
        {props.value}
    </button>
    </>
  )
}
