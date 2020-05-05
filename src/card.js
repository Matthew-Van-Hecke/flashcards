import React from 'react';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: props.front, front: props.front, back: props.back};
        this.flipCard = this.flipCard.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }
    render() {
        return (
            <div className="card-holder">
                <div className="card" onClick={this.flipCard}>
                    <p>
                        {this.state.display}
                    </p>
                </div>
                <button onClick={this.previous}>Previous</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
    flipCard() {
        if (this.state.display === this.props.front){
            this.setState({display: this.props.back});
        }
        else{
            this.setState({display: this.props.front});
        }
        console.log("Div Clicked")
    }
    previous(){
        console.log(this.state.display);
    }
    next(){
        console.log(this.state.display);
    }
    componentDidUpdate(){
        this.render();
    }
}
export default Card;