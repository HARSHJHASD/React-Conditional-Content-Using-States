import React, { useState } from "react";
import "./heading/heading.css";
import Button from "./button/button.jsx";
import Heading from "./heading/heading.jsx";
//this is fx we created to import Person component from person folder..
import Person from "./Person/Person.jsx";
//here we have implemented react hoooks.......
//react hoooks ke do fx use kiye 1)useState
//1)useState: it is used to define the state ,thats used to render data... to the component called like "person"
//this is the main app function that we will export to get used in index.js
const App = () => {
  //inside function,using "useState" we defined state form whichh data will be fetched into each component..
  //useState is a  hooks method
  //this is how we define the state in hooks.
  //it returns two values
  //1)all objects to 1st argument "personsState".
  //2)setPersonsState is the function that is used to update our state..it will be called when button pressed ,
  //then it will update values in our existing state ,which are different in the changed state
  //this is initial state.....
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "harsh", age: 23 },
      { name: "Vikas", age: 21 },
      { name: "Rahul", age: 19 }
    ]
  });
  //this fx called when buttons pressed........
  const buttonclicked = () => {
    setPersonsState({
      persons: [
        { name: "peter", age: 30 },
        { name: "Max", age: 23 },
        { name: "Maxyyy", age: 25 }
      ]
    });
  };
  //we have defined a state ...it is good for holding variable and then changing it when required.
  const [hidestate, changeHidestate] = useState({
    hideornot: [{ showPerson: true }, { title: "showing" }]
  });
  //to make changes in that state we are using this part..
  const hidePersonclass = () => {
    const doesshow = hidestate.hideornot[0].showPerson;
    changeHidestate({
      hideornot: [{ showPerson: !doesshow }, { title: "hidden" }]
    });
  };
  return (
    <div>
      {/* here we have added a button to trigger event and hooks */}
      {/* //also we created component of button for ease */}
      <Button click={buttonclicked} content="hi there"></Button>
      <Button click={hidePersonclass} content="Hide/Show"></Button>
      {/*  here we have passed arguments to this component */}
      {/* these will be recived by props in the definition PART */}
      {/* using propse.name and props.age .you can use them with {} inside html  */}
      {hidestate.hideornot[0].showPerson ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
            image="data:image/jpeg;base64,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"
            //here in prop "click" ,we hav passed reference to the function ,which is in this file
            click={buttonclicked}
          >
            This is child property.
          </Person>
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            image="data:image/jpeg;base64,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"
            click={buttonclicked}
          >
            This is child property second..
          </Person>
        </div>
      ) : null}
      <Heading name="harsh jha" />;
      <Heading name="vikas kumar" />;
      <Heading name="vikas1 kumar" />;
      <Heading name="vikas2 kumar" />;
      <Heading name="vikas3 kumar" />;
    </div>
  );
};
//this is what we are importing....
export default App;
