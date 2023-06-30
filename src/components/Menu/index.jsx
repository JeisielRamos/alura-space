import React from 'react'
import icons from './icons.json';

import styles from './menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            {icons.map((icon) => {
                return (
                    <li className={styles.menu__item}>
                        <img src={icon.path} alt={icon.alt} />
                        <a href="/">{icon.link}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
