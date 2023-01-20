import React, {useState} from 'react'

export default function TextArea(props) {

    const handleUpperCaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper case", "success");
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    };

    const handleLowerCaseClick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lower case", "success");
    };

    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Text Cleared", "success");
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
        props.showAlert("Text converted to Camel case", "success");
    };

    const [text, setText] = useState('Enter text');
  return (
    <>
    <div className={`container text-${props.mode === "light"?"dark":"light"}`}>
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

    <div className={`container my-3 text-${props.mode === "light"?"dark":"light"}`}>
        <h2>Your Text Summary</h2>
        <p>No of words = {text.split(" ").length} and No of characters = {text.length}</p>
        <p>{0.008*text.split(" ").length} seconds needed to read the paragraph.</p>
    </div>
    <div className={`container my-4 text-${props.mode === "light"?"dark":"light"}`}>
        <h2>PREVIEW</h2>
        <p>{text}</p>
        
    </div>
    </>
  )
}
