
//create h1 element in react
const head = React.createElement(
    "h1",
    {
        id: "heading",
        className: "headingClass"
    },
    "Hello World using React");

console.log(head); //return an object (react element)

//we need to put head in root as children
const root = ReactDOM.createRoot(document.getElementById("root"));

//render element inside root
// root.render(head);

/*
    How to create nested elements with siblings
    <div id="parent">
        <div class="childOne">
            <h1>Hello World</h1>
            <h2>Hello World</h2>
        </div>

         <div class="childTwo">
            <h1>Hello World</h1>
            <h2>Hello World</h2>
        </div>
    </div>

    React Element (Object) => becomes HTML that the browser understands
 */

const parent = React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "childOne", }, [ 
            React.createElement("h1", {}, "Hello Head One"),
            React.createElement("h2",{},"Hello Head Two") ]
        ),
        React.createElement("div", { id: "childTwo" }, [ 
            React.createElement("h1", {}, "Hello Head One"),
            React.createElement("h2",{},"Hello Head Two") ]
        )
]);
// root.render(parent)

const listItems = React.createElement("ul",{className: "parenList"},[
    React.createElement("li",{},"List One"),
    React.createElement("li",{},"List Two"),
    React.createElement("li",{},"List Three"),
])
root.render(listItems)

//To avoid this kind of syntax we use JSX in our code that allows us to write HTML in react
