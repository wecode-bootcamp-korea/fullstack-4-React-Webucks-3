import React from 'react';
import styles from './TopNav.module.scss';

function TopNav() {
  return (
    <>
      <div className={styles.head}>
        <h3 id={styles.logo}>Webucks</h3>
        <ul className={styles.list}>
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'S NEW</li>
        </ul>
      </div>
    </>
  );
}

export default TopNav;
