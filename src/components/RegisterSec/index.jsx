import { Link } from "react-router-dom"
import FormRegister from "./ReForm"
import styles from './style.module.scss'


function RegisterSec() {

    return (
        <main className="container register">
            <article>
                <Link to='/'>Voltar</Link>
            </article>

            <section className={styles.sec}>
                <div>
                    <h3 >Crie sua conta</h3>
                    <p >Rapido e grátis , vamos nessa!</p>
                </div>

                <FormRegister />
            </section>
        </main>
    )
}
export default RegisterSec