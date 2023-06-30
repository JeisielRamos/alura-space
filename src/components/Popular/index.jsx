import React from 'react'
import styles from './popular.module.scss'
import photosPopular from './photos.json'

export default function Popular() {
  return (
    <aside className={styles.popular}>
        <h2>Populares</h2>
        <ul  className={styles.popular__images}>
            {photosPopular.map( (photo) => {
                return (
                    <li key={photo.id}>
                        <img src={photo.path} alt={photo.alt} />
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}
