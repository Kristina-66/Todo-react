import React from 'react'
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>created by 
    <a
    className={styles.git}
    href="https://github.com/Melancholia66"
  >
     kristina
  </a>  - devChallenges.io</div>
  )
}
