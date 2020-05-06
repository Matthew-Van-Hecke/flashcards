import React from 'react';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {display: props.front, front: props.front, back: props.back};
        this.flipCard = this.flipCard.bind(this);
        this.updateStateBasedOnProps = this.updateStateBasedOnProps.bind(this);
    }
    render() {
        return (
            <div className="card-holder">
                <div className="card" onClick={this.flipCard}>
                    <p>
                        {this.state.display}
                    </p>
                </div>
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
    // componentDidMount(){
    //     this.updateStateBasedOnProps();
    //     this.render();
    // }
    componentWillReceiveProps(){
        this.updateStateBasedOnProps();
    }
    componentDidUpdate(){
        this.render();
    }
    updateStateBasedOnProps(){
        this.setState({display: this.props.front, front: this.props.front, back: this.props.back});
    }
}
export default Card;