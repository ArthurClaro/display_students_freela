import { useForm } from "react-hook-form";
import { formRegister } from "./formRegister";
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react";
import { useProductsContext } from "../../../providers/UserContext";
import styles from './style.module.scss'

function FormRegister() {

    const { lista, setLista, toastSuccess, toastErro } = useProductsContext()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formRegister)
    });

    const subtmitRegister = (formData) => {
        // Lógica de Registro
        // Aqui ele verifica se o e-mail já existe para não criar uma cópia
        const emailExists = lista.find(element => element.email === formData.email);
        if (emailExists) {
            toastErro('E-mail já cadastrado !', 2000)
            return;
        }
        const newData = { ...formData, id: lista.length + 1 }
        const updatedList = [...lista, newData];
        setLista(updatedList);
        localStorage.setItem("@LIST", JSON.stringify(updatedList));
        toastSuccess('Redirecionando para Login!', 1000)
        setTimeout(() => {
            window.location.href = '/'
        }, 2000);

        reset()
    };

    useEffect(() => {
        localStorage.setItem("@LIST", JSON.stringify(lista));
    }, [lista]);


    return (

        <>
            <form className={styles.form} onSubmit={handleSubmit(subtmitRegister)} >
                <label className="text label" htmlFor="name">Nome</label>
                <input className="input" type="text" id="name" {...register('name')} placeholder="Digite aqui seu nome" />
                {errors.name ? <p>{errors.name.message}</p> : null}

                <label className="text label" htmlFor="email">Email</label>
                <input className="input" type="email" id="email"  {...register('email')} placeholder="Digite aqui seu e-mail" />
                {errors.email ? <p>{errors.email.message}</p> : null}

                <label className="text label" htmlFor="password">Senha</label>
                <input className="input" type="password" id="password" {...register('password')} placeholder="Digite aqui sua senha" />
                {errors.password ? <p>{errors.password.message}</p> : null}

                <label className="text label" htmlFor="confirm">Confimar Senha</label>
                <input className="input" type="password" id="confirm" {...register('confirm')} placeholder="Digite aqui novamente sua senha" />
                {errors.confirm ? <p>{errors.confirm.message}</p> : null}


                <label className="text label" htmlFor="bio">Bio</label>
                <input className="input" type="text" id="bio" {...register('bio')} placeholder="Fale sobre você" />
                {errors.bio ? <p>{errors.bio.message}</p> : null}

                <label className="text label" htmlFor="contact">Contato</label>
                <input className="input" type="text" id="contact" {...register('contact')} placeholder="Opção de contato" />
                {errors.contact ? <p>{errors.contact.message}</p> : null}

                <label className="text label" htmlFor="module">Tipo de Usuário</label>
                <select id="module"  {...register('course_module')} >
                    <option value="" >Usuários</option>
                    <option value="Professor" >Professor</option>
                    <option value="Aluno" >Aluno</option>
                </select>
                {errors.course_module ? <p>{errors.course_module.message}</p> : null}

                <button className="cadasterBtn" type="submit">Cadastrar</button>
            </form>

        </>
    )
}
export default FormRegister
