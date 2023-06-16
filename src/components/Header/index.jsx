import style from './header.module.scss'
export default function Header () {
    return (
        <header className={style.header}>
            <img src="/images/logo.png" alt="logo do alura space" />
            <div className={style.header__container}>
                <input className={style.header__input} type="text" placeholder="O que você procura?" />
                <img src="/images/search.png" alt="icone de lupa" />
            </div>
        </header>
    )
}