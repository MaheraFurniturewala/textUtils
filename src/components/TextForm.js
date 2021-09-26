import React, { useState } from 'react'  //useState hook helps to make a state variable

export default function TextForm(props) {

    //event handler
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText);
        props.showAlert('Text cleared','success');
    }
    //updating the text as soon as someone types in the textarea 
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    //copy the text in the textarea
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        console.log(text)
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied','success');
    }
    //removing extra spaces
    const handleExtraSpaces = ()=>{
        //one or more than one space characters
        let newText = text.split(/[ ]+/);
        //then join with one space character
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    }

     //text --> state variable
     const [text, setText] = useState('');
     // text = "new text"; //wrong way to change the state
     // setText("new text");  //correct way

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
{/* onChange event so  that we can write inside the text area */}
{/* in style the first brackets are for js and second since we are making an object */}
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#373737':'white',
            color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            {/* text.split --> splits characters with space */}
            {console.log(text.split(" "))}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter text to preview here'}</p>
        </div>
        </>
    );
}
