import styles from "../css/Home.module.css"

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}></div>
            <div className={styles.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure architecto quidem suscipit, nihil esse deleniti soluta pariatur? Laborum eveniet deleniti id assumenda itaque perferendis obcaecati quasi porro corporis consequuntur.</p>
            </div>
        </section>
    )
}
export default Home