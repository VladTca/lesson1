import type { JSX } from "react";
import './MyButton.css';

// описали интерфейс для props
interface IMyButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  // описываем функцию внутри объекта
  func?: () => void;
}

// используем интерфейс в описании функции
function MyButton({ text = 'Click me..', type = "button", func = () => console.log('click!') }: IMyButtonProps):JSX.Element {
  return <button onClick={func} type={type} className="my-button">{text}</button>;
}

export default MyButton;
