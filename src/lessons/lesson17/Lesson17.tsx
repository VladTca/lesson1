import styles from './lesson17.module.css'
import type {JSX} from 'react';
import React from 'react';
import ChildrenProps from "../../components/childrenProps/ChildrenProps";

export default function Lesson17():JSX.Element {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lesson 17: Context + children practice</h2>
            <div className={styles.childrenContainer}>
                <ChildrenProps>
                    <h4>Эти данные переданы через children props 🙇‍♂️</h4>
                </ChildrenProps>
                <ChildrenProps>
                    <h2>Это карточка 🙆‍♂️</h2>
                    <p>Но все ее данные пришли через children props</p>
                    <h3>Такая карточка может быть более универсальной в использовании, т.к кол-во элементов HTML не ограничено</h3>
                </ChildrenProps>
            </div>
        </div>
    )
}
