import React, {useState} from 'react';
import BeautifulScreen from './BeautifulScreen.js';
import AmazingNumberButton from './AmazingNumberButton.js';
import GreatOperationButton from './GreatOperationButton.js';
import MagnificientEqualButton from './MagnificientEqualButton.js';
import ItSOverNineThousand from './ItSOverNineThousand.js';

const Calculator = (e) => {
    const [value, setValue] = useState([]);
    const [message, setMessage] = useState("");

    const calculate = function(e){
        setValue(value => value + e.target.id)
        console.log(value)
    }
 
    const result = function(){
        try {            
            setValue(eval(value))
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
                setValue("")
                setMessage("")
            }
        }

        if(eval(value) > 9000){
            console.log(eval(value))
            setMessage("It's over 9000 !")
        }
    }
    
    return (
        <div class="display">
            <BeautifulScreen value={value} />
            <AmazingNumberButton clickHandler={calculate}  />
            <GreatOperationButton clickHandler={calculate} />
            <MagnificientEqualButton clickHandler={result}/>
            <ItSOverNineThousand message={message}/>
        </div>
    );
};

export default Calculator;