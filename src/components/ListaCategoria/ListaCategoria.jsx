import styled from "styled-components"


const ListaCategoriaEstilizada = styled.div` 
    width: 80%;
    margin: 24px 0;

div, label {
    font-size: 18px;
    font-weight:600;
    display:flex;
    margin-bottom: 10px;
}

div, select {
    width:100%;
    height: 10px;
    border-radius: 10px;
    border: none;
    padding:20px 10px;
    font-size: 16px;
    color: #000;
}
`

const ListaCategoria = (props) => {

    const categorias = [
        "Acción",
        "Comedia",
        "Terror",
        "Romántica",
        "Animada"
    ]

    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)

    }

    return(
    <ListaCategoriaEstilizada>
        <label for="categoria">Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <opcion value="" disable defaultValue="" hidden>Seleccionar equipo</opcion>
            {categorias.map((categoria, index) => {
                return <option key={index} value={categoria} >{categoria}</option>
            })}
        </select>
    </ListaCategoriaEstilizada>

    )
}


export default ListaCategoria