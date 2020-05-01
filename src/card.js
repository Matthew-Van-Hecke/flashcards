import React from 'react';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {front: 'TEXT TO DISPLAY'};
        // this.handleClick = cardFlip;
    }
    render() {
        return (
        <div class="card">
            <p>
                {this.state.front}
                {/* This is my sample text. */}
            </p>
        </div>
        )
    }
    // cardFlip() {
    //     if (this.)
    // }
}
export default Card;