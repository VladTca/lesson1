import Homework01 from "../../homework/homework01/Homework01.jsx";
import styles from "./ProfileCard.module.css";

function ProfileCard() {
  const defaultUser = {
    name: "Ivan",
    developer: "Frontend",
    firma: "Facebook",
  };
  return (
    <div>
      <Homework01 />
      <h2 className={styles.heading}>
        Я работаю с программистом {defaultUser.name} на фирме {defaultUser.firma}
      </h2>
    </div>
  );
}
export default ProfileCard;
