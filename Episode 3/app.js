import React from "react";
import ReactDOM from "react-dom/client";

//Using pure react
const head = React.createElement(
    "h1",
    { className: "heading" },
    "Heading One"
)
console.log(head)

//JSX - is not HTML in Javascript. It is HTML-like or XML-like syntax

//If JSX is in single line
const jsxHead = <h1 id="head" className="head-parent">JSX Heading</h1>
console.log(jsxHead)


//If JSX is in multiple line we need to wrap this in () bracket because Babel needs to understand where the JSX is starting and ending

const jsxList = (
    <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
    </ul>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxList)