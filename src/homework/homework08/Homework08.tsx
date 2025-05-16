import React, {useState} from 'react';
import MyButton from "../../components/myButton/MyButton";

function Homework08() {
    const [fox, setFox] = useState<string>("#");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     handlerClick();
    // }, []);

    const handlerClick = () => {
        setIsLoading(true);
        fetch('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setFox(data.image);
                    setIsLoading(false);
                }, 1000); // Задержка в 1 сек
            });
    }

    return (
        <div>
            <h1>Homework 8: useEffect hook 🪝</h1>
            {isLoading ? (
                <p>Загрузка...</p> // Отображаем, пока состояние isLoading === true
            ) : (
                <img width={200} src={fox} alt="Fox" />
            )}
            <MyButton func={handlerClick} text="Change fox" type={'button'} />
        </div>
    );
}

export default Homework08;