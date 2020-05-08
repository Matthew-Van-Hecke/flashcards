import React from 'react';
import Card from './card';
import Axios from 'axios';
class Stack extends React.Component{
    constructor(props){
        super(props);
        this.state = {collection: [{cards: [{definition: "", word: ""}], title: ""}], initialLoad: true, stackNumber: 0, cardNumber: 0};
        this.previousCard = this.previousCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.previousSet = this.previousSet.bind(this);
        this.nextSet = this.nextSet.bind(this);
        this.disableButtons = this.disableButtons.bind(this);
    }
    render(){
                let currentCard = this.state.collection[this.state.stackNumber].cards[this.state.cardNumber];
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
    }
    nextCard(){
        this.setState({cardNumber: this.state.cardNumber + 1});
    }
    previousSet(){
        this.setState({stackNumber: this.state.stackNumber - 1, cardNumber: 0});
    }
    nextSet(){
        this.setState({stackNumber: this.state.stackNumber + 1, cardNumber: 0});
    }
    componentDidMount(){
        this.getAllStacks();
        this.disableButtons();
    }
    componentDidUpdate(){
        this.render();
        if(this.state.collection)
        {
            this.disableButtons();
        }
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
    getAllStacks(){
        Axios.get('https://localhost:44393/api/collection').then(collectionFromAPI => this.setState({collection: collectionFromAPI.data}));
    }
}
export default Stack;