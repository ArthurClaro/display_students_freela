import { useProductsContext } from '../../providers/UserContext'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import styles from './style.module.scss'


function HomeLogSec() {

    const { lista, toastSuccess, toastErro } = useProductsContext()

    const { register: register1, handleSubmit: handleSubmit1 } = useForm();

    const subtmitLogin = (formData) => {
        // Lógica do Login
        // Aqui ele verifica no localStorage se existe o email e faz a verificação 
        const user = lista.find(element => element.email === formData.email);
        if (user) {
            if (user.password === formData.password) {
                localStorage.setItem("@LOGIN", JSON.stringify(user));
                toastSuccess('Redirecionando para Dashboard!', 2000)
                setTimeout(() => {
                    window.location.href = `/dash/${user.course_module}`
                }, 2000);
            } else {
                toastErro('Senha incorreta !', 1000)
            }
        } else {
            toastErro('Usuário não cadastrado !', 1000)
        }
    }

    return (
            <section className={styles.loginContainer}>
                
                <div className={styles.loginLeft}>
                    <img src={logo} alt='Logo' />
                </div>

                <div className={styles.loginRight}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit1(subtmitLogin)}>
                        <label htmlFor="username">E-mail</label>
                        <input type="text" {...register1('email')} placeholder="user@email.com" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" {...register1('password')} placeholder="********" />
                        <button type="submit">Entrar</button>
                    </form>
                    <div className='link'>
                        <Link to="/register">Criar uma conta</Link>
                    </div>
                </div>

            </section>
    )
}
export default HomeLogSec