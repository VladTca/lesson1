import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";
import MyInput from "../../components/myInput/MyInput.jsx";

function Lesson03() {
    const friends = [
        { name: 'Peter', age: 40, hobby: 'coding' },
        { name: 'Rosa', age: 35, hobby: 'hiking' },
        { name: "Anton", age: "20", hobby: "painting" }
    ];
    return (
        <div>
            <h1>Lesson 3: react props 👨‍👩‍👧‍👦</h1>
            <MyButton text="Нажми меня" func={() => console.log('push')}/>
            <MyButton text="Go!" func={() => console.log('Go')}/>
            <MyButton/>
            <MyInput name="Olga" type="text" placeholder="Введите текст" label="Olga"/>
            {/* передача данный в компонент происходит в момент вызова - данные передаются по ключам, которые похожи на аттрибуты html тегов. и по этим же ключам мы встречаем данные внутри компонента */}
            <UserCard name="Anton" age={20} hobby="painting" />
            <UserCard name="Rosa" age={35} />
            {/* теперь получается что один и тот же компонент с разными переданными данными будет выглядеть и работать иначе */}
            <UserCard name={friends[0].name} age={friends[0].age} hobby={friends[0].hobby} />
            {/* когда мы ничего не передаем в компонент сработают его значения по умолчанию */}
            <UserCard />
        </div>
    );
}

export default Lesson03;