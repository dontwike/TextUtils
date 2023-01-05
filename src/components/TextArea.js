import React, {useState} from 'react'

export default function TextArea(props) {

    const handleUpperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    };

    const handleLowerCaseClick =()=>{
        setText(text.toLowerCase());
    };

    const handleClearClick = ()=>{
        setText('');
    };

    const handleCamelCaseClick = ()=>{
        let txt = text.toLowerCase()+" ";
        let p=0;
        let wd="", word="";
        for (let i=0; i<txt.length; i++) {
            let ch = txt.charAt(i);
            if (ch === ' '){
                wd = txt.substring(p,i);
                p=i+1;
                word = word + wd.charAt(0).toUpperCase() + wd.substring(1,wd.length)+" ";
            }
        }
        setText(word.trim());
    };

    const [text, setText] = useState('Enter text');
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className="text-center">
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
        <button className="btn btn-primary ml-3" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
        <button className="btn btn-primary ml-3" onClick={handleCamelCaseClick}>Convert to CamelCase</button>
        <button className="btn btn-primary ml-3" onClick={handleClearClick}>Clear</button>
    </div>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>No of words = {text.split(" ").length} and No of characters = {text.length}</p>
        <p>{0.008*text.split(" ").length} seconds needed to read the paragraph.</p>
    </div>
    <div className="container my-4">
        <h2>PREVIEW</h2>
        <p>{text}</p>
        
    </div>
    </>
  )
}
