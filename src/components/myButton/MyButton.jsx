import "./MyButton.css";

function MyButton({
  text = "Click me..",
  type = "button",
  func = () => console.log("clicked"),
}) {
  return (
    <button type={type} className="my-button" onClick={func}>
      {text}
    </button>
  );
}

export default MyButton;
