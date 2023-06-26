import React from 'react'
import iconHome from '../../assets/icons/home.png'
import iconMostLikes from '../../assets/icons/most-likes.png'
import iconMostViews from '../../assets/icons/most-views.png'
import iconNews from '../../assets/icons/news.png'
import iconSurpriseMe from '../../assets/icons/surprise-me.png'

import styles from './menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <img src={iconHome} alt="" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={iconMostLikes} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={iconMostViews} alt="" />
                <a href="/">Mais visitadas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={iconNews} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={iconSurpriseMe} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
