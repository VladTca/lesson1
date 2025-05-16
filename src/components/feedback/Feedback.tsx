import React, {useState} from "react";
import MyButton from "../myButton/MyButton";

function Feedback() {
    // заводим переменные состояния под данные
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => {
        setLike(prev => prev + 1)
    }

    const handleDislike = () => {
        setDislike(prev => prev + 1)
    }

    const handleReset = () => {
        setLike(0)
        setDislike(0)
    }

    return (
        <div>
            <h1>Feedback 😌</h1>
            <div>
                <span>{like}</span>
                <MyButton text="👍" func={handleLike} />
                <MyButton text="👎" func={handleDislike} />
                <span>{dislike}</span>
            </div>
            <div>
                <MyButton text="Reset Results" func={handleReset} />


            </div>
        </div>
    );
}

export default Feedback;
