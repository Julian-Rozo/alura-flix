import { useState } from "react"

import styled from "styled-components"

const CampoTextoEstilizado = styled.div`
    color:#FFF;
    margin: 24px 0;
    width: 80%;
    

div, label {
    font-size: 18px;
    font-weight:600;
    display:flex;
    margin-bottom: 10px;
}

div, input {
    width: 100%;
    height: 10px;
    border-radius: 20px;
    border: none;
    padding:20px;
    box-sizing: border-box;
}

`


const CampoTexto = (props) => {
        const [valor, actualizarValor] = useState("")  
      

        const manejarCambio = (e) => {
            
            props.actualizarValor(e.target.value)
        }

    return ( <CampoTextoEstilizado>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </CampoTextoEstilizado>
    )
}

export default CampoTexto