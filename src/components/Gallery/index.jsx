import React from 'react'
import Tags from 'components/Tags'
import styles from './gallery.module.scss'
import Cards from 'components/Gallery/Cards'
import photos from './photos.json'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards itens={photos} styles={styles}/>
    </section>
  )
}
