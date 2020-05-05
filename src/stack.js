import React from 'react';
import Card from './card';
class Stack extends React.Component{
    constructor(props){
        super(props);
        this.state = {stack: props.stack}
    }
    render(){
        return(
            <div>
                <Card front="This is an example flashcard" back="This is the back of the card" display="" />
            </div>
        );
    }
}
export default Stack;