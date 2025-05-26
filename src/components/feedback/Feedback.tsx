import { useEffect, useState, type JSX } from "react";
import MyButton from "../myButton/MyButton";

function Feedback(): JSX.Element {
  // заводим переменные состояния под данные
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const handleLike = ():void => {
    setLike(prev => prev + 1)
  }

  const handleDislike = ():void => {
    setDislike(prev => prev + 1)
  }

  const handleReset = ():void => {
    setLike(0)
    setDislike(0)
  }

  useEffect(() => {
    console.log('useEffect!')
  }, [])

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
