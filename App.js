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

// STARTING SWIGGY DEMO APP FROM HERE...

const NavHeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="navigation-container">
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Login</ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          className="res-thumbnail"
          alt="Image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/5a53f484-bb60-4e6c-9a9f-cdfb0e887266_36966.JPG  "></img>
      </div>
      <div className="res-info">
        <p>Food Name</p>
        <p>price</p>
        <p>Rating</p>
      </div>
    </div>
  )
}
const resList = []
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search-container">
        <h1>Logo</h1>
      </div>
      <div className="card-container">
        {
          resList.map((restaurent) => (
            // key={restaurent.data.id} is passed to give unique key for each list item for react. 'key' is reserved word. 
            <RestaurantCard key={restaurent.data.id} resData={restaurent} />
          ))}
      </div>
    </div>
  )
}

const AppComponent = () => {
  return (
    <div className="app">
      <NavHeaderComponent />
      <BodyComponent></BodyComponent>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);//rendering react element
root.render(<AppComponent />)// rendering react component
