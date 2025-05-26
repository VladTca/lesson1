import { type JSX } from "react";
import './UserCard.css';

interface IUserCardProps {
  name?: string
  age?: number
  hobby?: string
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
