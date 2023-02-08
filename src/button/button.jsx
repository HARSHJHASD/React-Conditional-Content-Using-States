//importing this is very important in everypage
import "./button.css";
//here we are ijmporting css file that belongs only to the person jsx

//the function that e are creating ,that  we will import in the main app file later on
const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}> {props.content}</button>
    </div>
  );
};

export default Button;
