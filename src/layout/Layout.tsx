import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css';
import React from "react";

const navLinks = [
  { to: '/', title: 'Home' },
  { to: 'fetch-fox', title: 'Fetch fox' },
  { to: 'feedback', title: 'Feedback' },
  { to: 'form-gender', title: 'Gender form' },
  { to: 'store', title: 'Store' },
    { to: 'products', title: 'Products' },
    { to: 'cart', title: 'Cart' },

];

export default function Layout() {

  return (
    <>
      <header className={styles.header}>
        {navLinks.map((el, index) => (
          <NavLink key={index} className={({ isActive }) => (isActive ? styles.isActive : '')} to={el.to}>{el.title}</NavLink>
        ))}
      </header>
      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
