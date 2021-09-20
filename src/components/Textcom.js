import React, { useState } from "react";



function Textcom() {
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const upperCase = (e) => {
        let upper_case = text.toUpperCase();
        setText(upper_case);
    }

    const lowerCase = () => {
        let lower_case = text.toLowerCase();
        setText(lower_case);
    }

    const clearText = () => {
        setText("");
    }

    return (
        <>
            <div className="container">
                <h2 className="text_title">Enter Text To Analyse</h2>
                <div className="text_input">
                    <textarea name="textarea" id="text_field" cols="30" rows="20" placeholder="Enter Text Here" value={text} onChange={handleOnChange}>

                    </textarea>
                </div>
                <div className="btn">
                    <button className="btn1" onClick={upperCase} >Uppercase</button>
                    <button className="btn1" onClick={lowerCase} >Lowerrcase</button>
                    <button className="btn1" onClick={clearText} >ClearText</button>
                </div>
                <div className="word_length">
                    <p id="word_len">Words: {text.split(" ").length - 1} And Characters: {text.length}</p>
                </div>
                <div className="time">
                    <p id="avg_time">Time To Read: {text.split(" ").length * 0.008 - 0.008} minutes</p>
                </div>
                <div className="preview">
                    <p id="pre">{text}</p>
                </div>
            </div>
        </>
    )
}

export default Textcom;
