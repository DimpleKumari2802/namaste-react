import React from "react";
import ReactDOM from "react-dom/client";
//React Component
//Class Component
//Functional Component
const purereactElement = (
    <h3>I am pure React element One</h3>
)

const TitleComponent = () =>(
    <div className="title-container">
        <p>Namate react Title</p>
    </div>
)

// const data = api.getData();
//Component Composition
const HeadingComponent = () => (
    <div className="parent-container">
        <h1>Functional Component</h1>
        {purereactElement}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)