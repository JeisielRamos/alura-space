import React from 'react'
import iconFavorito from '../../../../assets/icons/favorito.png'
import iconOpen from '../../../../assets/icons/open.png'


export default function Card({item ,styles}) {
  return (
    <li key={item.id} className={styles.gallery__card}>
        <img className={styles.gallery__image} src={item.imagem} alt={item.titulo} />
        <p className={styles.gallery__description}>{item.titulo}</p>
        <div>
            <p>{item.creditos}</p>
            <span>
                <img src={iconFavorito} alt="ícone coração de curtir" />
                <img src={iconOpen} alt="ícone de abrirm modal" />
            </span>
        </div>
    </li>
  )
}
