import React from 'react';

const card = (props) => {
    return (
    <div class="card">
        <p>
            {props.front}
        </p>
    </div>
    )
}

export default card;