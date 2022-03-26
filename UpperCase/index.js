import {useState} from 'react';

function Uppercase(props) {
    const textIn = props.chilren;
    const upperText = textIn.toUpperCase();
    return <div>
        {
            upperText
        }
    </div>
}

function clickCounter(){
    const [counter, setCounter] = useState(1);
    function clickSum(){
        setCounter(counter + 1);
        console.log('done.');
    }
    <div>
        <div> counter </div>
        <button onClick={clickSum}> Insert </button>
    </div>
}

function page() {
    return <Uppercase> I'm fuckign here !!! </Uppercase>
}