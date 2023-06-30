import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Popular from "components/Popular";

import styles from './initPage.module.scss'

export default function InitPage () {
    return (
        <>
            <Header />
            <main>
                <section className={styles.main}>
                    <Menu />
                    <Banner style={styles.main__image}/>
                </section>

                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
            <Footer/>
        </>
    )
}