import React, { useState } from "react";

// import copyImage from "../assets/copy.png";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const toPascalCase = (str) => {
    return str
      .trim()
      .split(/[\s-_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleCamelCase = () => {
    let newText = toPascalCase(text);
    setText(newText);
    props.showAlert("Converted to Camel Case.", "success");
  };

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
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
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
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-10">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#353935",
            color: props.mode === "light" ? "black" : "white",
            textAlign: "justify",
          }}
        ></textarea>

        <button
          disabled={text.length === 0}
          onClick={handleCamelCase}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Camilcase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleloClick}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          onClick={removeExtraSpaces}
          className="btn btn-primary mx-1 my-1"
        >
          Remove space
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleClearText}
          className="btn btn-primary mx-1 my-1"
        >
          Clear Text
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
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          Can be read in{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          min{" "}
        </p>
        <h2>Preview</h2>
        <p style={{ textAlign: "justify" }}>
          {text.length > 0 ? text : "Nothing to Preview..."}
        </p>
      </div>
    </>
  );
}
