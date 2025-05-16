import './UserCard.css';
import {JSX} from "react";


// через деструктуризацию разделяем передаваемый из родительского компонента объект props с данными на переменные с таким же названием, как и у ключей в передаваемом объекте
// значения по умолчанию мы прописываем внутри деструктуризации через приравнивание к выбранному значению
interface IUserCardProps {
    name?:string,
    age?:number,
    hobby?:string
}


function UserCard({ name = 'John Doe', age = 404, hobby}: IUserCardProps):JSX.Element {

  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      <p>{hobby ? "Hobby: " + hobby : 'No hobby 🙅‍♂️'}</p>
    </div>
  );
}

export default UserCard;
