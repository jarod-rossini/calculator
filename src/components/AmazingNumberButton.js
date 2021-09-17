import React, { useState } from "react";

const AmazingNumberButton = ({clickHandler}) => {
    return(
    <div id="numbers">
        <button onClick={clickHandler} id="1" class="number">1</button>
        <button onClick={clickHandler} id="2" class="number">2</button>
        <button onClick={clickHandler} id="3" class="number">3</button>
        <button onClick={clickHandler} id="4" class="number">4</button>
        <button onClick={clickHandler} id="5" class="number">5</button>
        <button onClick={clickHandler} id="6" class="number">6</button>
        <button onClick={clickHandler} id="7" class="number">7</button>
        <button onClick={clickHandler} id="8" class="number">8</button>
        <button onClick={clickHandler} id="9" class="number">9</button>
        <button onClick={clickHandler} id="0" class="number last">0</button>
    </div>
    )
}

export default AmazingNumberButton;