import React, { useState } from 'react'  //useState hook helps to make a state variable

export default function TextForm(props) {
    
    //event handler
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText);
    }
    //updating the text as soon as someone types in the textarea 
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    //text --> state variable
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text");  //correct way
    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        console.log(text)
        text.select();
        navigator.clipboard.writeText(text.value);
    }

   
    console.log(text);

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
{/* onChange event so  that we can write inside the text area */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            {/* text.split --> splits characters with space */}
            {console.log(text.split(" "))}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
