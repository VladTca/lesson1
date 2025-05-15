import { fellowship } from './fellowship';
import { v4 } from 'uuid';
import './Lesson05.css';
import MyButton from "../../components/myButton/MyButton";

function Lesson05() {
  // если вам нужен уникальный идентификатор и нет id можно воспользоваться библиотекой uuid для генерации
  console.log(v4());
  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      {fellowship.map(hero => (
        // ! попробуйте этот код вынести в отдельный компонент HeroCard а данные передавать через props
        <div key={hero.id} className={`hero-card ${hero.isDark ? 'hero-card-dark' : 'hero-card-light'}`}>
          <h3>{hero.name}</h3>
          <p>{hero.age} years old</p>
          <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
          <p>Weapons: {hero.weapons.map((weapon, index) => index !== hero.weapons.length - 1 ? weapon + ', ' : weapon + '')}</p>
          <div className="image-wrapper">
            <img src={hero.image} alt="" />
          </div>
          {/* <MyButton text={hero.name}/> */}
        </div>
      ))}
    </div>
  );
}

export default Lesson05;
