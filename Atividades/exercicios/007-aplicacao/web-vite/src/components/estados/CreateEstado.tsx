import React, { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateEstado = () =>{

    const [nome, setNome] = useState('');
    const [sigla, setSigla]= useState('');

    const navigate = useNavigate()

    const handleNewEstado = async (event : React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        const data ={
            nome,
            sigla
        }

        try {
            await api.post('/estados', data);
            alert('Estado inserido com sucesso!');
            navigate('/estados');
        } catch (error) {
            alert('Erro ao cadastrar estado!');
            console.error(error);
        }

    }


    return(

        <div>
            <Link to="/">Voltar</Link>
            
            <h3>Cadastro de estados: {nome}-{sigla}</h3>

            <form onSubmit={handleNewEstado}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" value={nome} placeholder="Nome do estado" onChange={e => setNome(e.target.value)}/>

                    <label htmlFor="sigla">Nome</label>
                    <input type="text" name="sigla" id="sigla" value={sigla} placeholder="Sigla do estado" onChange={e => setSigla(e.target.value)}/>
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default CreateEstado;
