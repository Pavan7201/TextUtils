import React, { useState } from "react";

import copyImage from "../assets/copy.png";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied to clipboard.", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text box is cleard.", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has be removed.", "success");
  };

  const handleOnChange = (evt) => {
    setText(evt.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#353935",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-3"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={handleloClick}
          className="btn btn-primary mx-1"
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-1"
        >
          <img src={copyImage} alt="Copy" width="20" className="mx-1" />
          Copy Text
        </button>
        <button
          type="button"
          onClick={handleClearText}
          className="btn btn-primary mx-1"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={removeExtraSpaces}
          className="btn btn-primary mx-1"
        >
          Remove space
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>Can be read in {0.008 * text.split(" ").length} min </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
