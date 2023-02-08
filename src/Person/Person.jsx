//importing this is very important in everypage
//here we are ijmporting css file that belongs only to the person jsx
import "./Person.css";

//the function that e are creating ,that  we will import in the main app file later on
const Person = (props) => {
  return (
    <div className="person">
      <img src={props.image} alt="pic here" />
      <h1 onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </h1>
    </div>
  );
};

export default Person;
