import App from "./app.jsx";
var React = require("react");
var ReactDOM = require("react-dom/client");

//this is where we render ...
const root = ReactDOM.createRoot(document.getElementById("root"));
//this is what we want too render.....
root.render(
  <div>
    <App />
  </div>
);
