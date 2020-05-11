import React from 'react';

class CreateCard extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.showForm}>Add New Card</button>
                <div id="create">
                    <h4>Create New Card</h4>
                    <form>
                        <input type="text" placeholder="Collection Name"></input>
                        <input type="text" placeholder="Front of Card (word)"></input>
                        <input type="text" placeholder="Back of Card (definition)"></input>
                    </form>
                </div>
            </div>
        )
    }
    showForm(){
        document.getElementById("create").style.display = 'block';
    }
}

export default CreateCard;