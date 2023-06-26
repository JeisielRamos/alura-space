import React from 'react'

import imgBanner from '../../assets/banner/banner.png'

export default function Banner({style}) {
  return (
    <div className={style}>
        <h1>A Galeria mais completa </h1>
        <img src={imgBanner} alt="A imagem da terra vista do espaço" />
    </div>
  )
}
