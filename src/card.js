import React from 'react';
class Card extends React.Component{
    render() {
        return (
        <div class="card">
            <p>
                {this.props.front}
                {/* This is my sample text. */}
            </p>
        </div>
        )
    }
}
export default Card;