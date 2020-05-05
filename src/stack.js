import React from 'react';
import Card from './card';
class Stack extends React.Component{
    constructor(props){
        super(props);
        this.state = {collection: [{"id":1,"title":"React","cards":[{"id":1,"word":"state","definition":"JS object that holds values for a component"},{"id":2,"word":"props","definition":"A way to pass data into components on initialization"},{"id":3,"word":"component","definition":"Reusable building blocks for UI using JSX"}]},{"id":2,"title":"C#","cards":[{"id":4,"word":"variable","definition":"Named space in memory"},{"id":5,"word":"class","definition":"Template for an object that consists of member variables, constructor, methods"},{"id":6,"word":"object","definition":"Instance of a class"}]},{"id":3,"title":"Flutter","cards":[{"id":7,"word":"widget","definition":"Reusable component in Flutter"}]}], stackNumber: 0, cardNumber: 0}
        this.previousCard = this.previousCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.previousSet = this.previousSet.bind(this);
        this.nextSet = this.nextSet.bind(this);
    }
    render(){
        let currentCard = this.state.collection[this.state.stackNumber].cards[this.state.cardNumber];
        console.log(currentCard);
        return(
            <div>
                <h1>{this.state.collection[this.state.stackNumber].title}</h1>
                <Card front={currentCard.word} back={currentCard.definition} display="" />
                <button onClick={this.previousSet}>{'|<<'}</button>
                <button onClick={this.previousCard}>{'|<'}</button>
                <button onClick={this.nextCard}>{'>|'}</button>
                <button onClick={this.nextSet}>{'>>|'}</button>
            </div>
        );
    }
    previousCard(){
        console.log("Previous Card");
    }
    nextCard(){
        console.log("Next Card");
    }
    previousSet(){
        console.log("Previous Set");
    }
    nextSet(){
        console.log("Next Set");
    }
}
export default Stack;