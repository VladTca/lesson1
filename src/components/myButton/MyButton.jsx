import './MyButton.css';

function MyButton({ text = 'Click me..', type = 'button', func = () => console.log('click!') }) {
  return <button onClick={func} type={type} className="my-button">{text}</button>;
}

export default MyButton;
