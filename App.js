import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement- JS object => HTML-element (render) 
// const heading = React.createElement("h1", { id: "heading" }, "namaste react from create Element");

// JSX code => converted to React.createElement by Babel
// JSX => React.createElement => ReactElement- JS object => HTML-element (render)

// React Element
const jsxHeading = (
  <h1 id="heading">
    namaste react from JSX
  </h1>
)

// React Components types
// 1> Class Based components (Old Way)
// 2> Functional components (New Way)


// Functional Component: A function that returns JSX code.
// Name should aleays start with Capital letter.
const Title = () => {
  return <h1>
    namaste react title component
  </h1>
}
// Here Title component is being rendered into Heading component, also known as component Composition
// JS code inside Curly braces can be rendered like hello OR Title here. (since, Title at the end is JS function)
const hello = "hello world!"
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    < h1 >
      namaste react from functional component
    </h1 >
    <p>{hello}</p>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);//rendering react element
root.render(<HeadingComponent />)// rendering react component
