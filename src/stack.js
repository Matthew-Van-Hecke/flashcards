import React from 'react';
import Card from './card';
class Stack extends React.Component{
    constructor(props){
        super(props);
        this.state = {collection: [{"id":1,"title":"React","cards":[{"id":1,"word":"state","definition":"JS object that holds values for a component"},{"id":2,"word":"props","definition":"A way to pass data into components on initialization"},{"id":3,"word":"component","definition":"Reusable building blocks for UI using JSX"}]},{"id":2,"title":"C#","cards":[{"id":4,"word":"variable","definition":"Named space in memory"},{"id":5,"word":"class","definition":"Template for an object that consists of member variables, constructor, methods"},{"id":6,"word":"object","definition":"Instance of a class"}]},{"id":3,"title":"Flutter","cards":[{"id":7,"word":"widget","definition":"Reusable component in Flutter"}]}], stackNumber: 0, cardNumber: 0}
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }
    render(){
        let currentCard = this.state.collection[this.state.stackNumber].cards[this.state.cardNumber];
        console.log(currentCard);
        return(
            <div>
                <Card front={currentCard.word} back={currentCard.definition} display="" />
                <button onClick={this.previous}>Previous</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
    previous(){
        console.log("Previous");
    }
    next(){
        console.log("Next");
    }
}
export default Stack;