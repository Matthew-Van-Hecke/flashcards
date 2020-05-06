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
        this.disableButtons = this.disableButtons.bind(this);
    }
    render(){
        let currentCard = this.state.collection[this.state.stackNumber].cards[this.state.cardNumber];
        // console.log(currentCard);
        return(
            <div>
                <h1>{this.state.collection[this.state.stackNumber].title}</h1>
                <Card front={currentCard.word} back={currentCard.definition} display="" />
                <button id="previous-set" onClick={this.previousSet}>Previous Set</button>
                <button id="previous-card" onClick={this.previousCard}>Previous Card</button>
                <button id="next-card" onClick={this.nextCard}>Next Card</button>
                <button id="next-set" onClick={this.nextSet}>Next Set</button>
            </div>
        );
    }
    previousCard(){
        this.setState({cardNumber: this.state.cardNumber - 1});
        console.log("Previous Card");
    }
    nextCard(){
        this.setState({cardNumber: this.state.cardNumber + 1});
        console.log(this.state.collection[this.state.stackNumber].cards[this.state.cardNumber]);
        console.log(this.state.cardNumber);
    }
    previousSet(){
        this.setState({stackNumber: this.state.stackNumber - 1, cardNumber: 0});
        console.log("Previous Set");
    }
    nextSet(){
        this.setState({stackNumber: this.state.stackNumber + 1, cardNumber: 0});
        console.log("Next Set");
    }
    componentDidMount(){
        this.disableButtons();
    }
    componentDidUpdate(){
        this.render();
        this.disableButtons();
        console.log(this.Card);
    }
    disableButtons(){
        let previousCardButton = document.getElementById("previous-card");
        let nextCardButton = document.getElementById("next-card");
        let previousStackButton = document.getElementById("previous-set");
        let nextStackButton = document.getElementById("next-set");

        this.disableIndividualButton(previousCardButton, this.state.cardNumber === 0);
        this.disableIndividualButton(nextCardButton, this.state.cardNumber === this.state.collection[this.state.stackNumber].cards.length - 1);
        this.disableIndividualButton(previousStackButton, this.state.stackNumber === 0);
        this.disableIndividualButton(nextStackButton, this.state.stackNumber === this.state.collection.length - 1);
    }
    disableIndividualButton(button, condition){
        button.disabled = condition;
    }
}
export default Stack;