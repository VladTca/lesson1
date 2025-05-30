import type {JSX} from 'react';
import React from 'react';
import styles from './childrenProps.module.css';

export default function ChildrenProps({ children }: {children: React.ReactNode}): JSX.Element {
    return (
        <div className={styles.card}>
            <div>Wrapper для children props:</div>
            {children}
        </div>
    );
}
