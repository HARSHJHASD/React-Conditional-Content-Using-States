import "./heading.css";
var React = require("react");

//this is fx we created to import.....
function Heading(props) {
  return (
    <div className="headingbox">
      <h1> {props.name} </h1>
    </div>
  );
  //this is used when format wont be jsx but only js.. cz in jsx u can write XML code.
  // return React.createElement('div',null,React.createElement('h1',null,props.name));
}

//this is what we are importing....
export default Heading;
