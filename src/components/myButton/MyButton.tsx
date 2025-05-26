import type { JSX } from "react";
import styles from './MyButton.module.css';
import cn from 'classnames';

// описали интерфейс для props
interface IMyButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  // описываем функцию внутри объекта
  func?: () => void;
  // кнопка активная или нет
  disabled?: boolean,
  variant?: 'primary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

// используем интерфейс в описании функции
function MyButton({ text = 'Click me..', type = "button", func = () => {}, disabled = false, variant = 'primary', size = 'md' }: IMyButtonProps): JSX.Element {
  return <button onClick={func} type={type} className={cn(styles.myButton, {
    [styles.primary]: variant === 'primary',
    [styles.danger]: variant === 'danger',
    [styles.success]: variant === 'success',
    [styles.disabled]: disabled === true,
    [styles.sm]:size === 'sm',
    [styles.md]:size === 'md',
    [styles.lg]:size === 'lg',
  })}>{text}</button>;
}

export default MyButton;
