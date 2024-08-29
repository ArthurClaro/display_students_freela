import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const ExampleContext = createContext({})

export const ExampleProvider = ({ children }) => {

    function toastSuccess(message, time) {
        toast.success(message, {
            toastId: 'succes1',
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#00796b',
                color: '#F8F9FA'
            }
        });
    }
    function toastErro(message, time) {
        toast.error(message, {
            toastId: 'erro1',
            position: "top-right",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                background: '#00796b',
                color: '#F8F9FA'
            }
        });
    }

    // ///////////////////////////////////////////////////////////////////////////////////////////////////////

    //  Estado para arquivar os Usuários 
    // Usando o LocalStorage como banco de dados
    const [lista, setLista] = useState(() => {
        const savedList = localStorage.getItem("@LIST");
        return savedList ? JSON.parse(savedList) : [
            {
                id: 1,
                name: 'Karol',
                course_module: "Professor",
                bio: "Professora de Ensino Front-End",
                contact: "6199481-5811",
                email: "karol@gmail.com",
                password: "0123"
            }
        ];
    });


    return (
        <ExampleContext.Provider value={{
            toastSuccess, toastErro, setLista, lista,
        }}>
            {children}
        </ExampleContext.Provider>
    )
}

export const useProductsContext = () => useContext(ExampleContext)
