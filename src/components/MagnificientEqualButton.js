import React from 'react';

const MagnificientEqualButton = ({clickHandler}) => {
    return (
        <div>
            <button onClick={clickHandler} id="=" class="equal">=</button>
        </div>
    );
};

export default MagnificientEqualButton;