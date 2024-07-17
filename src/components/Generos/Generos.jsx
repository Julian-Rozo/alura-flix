import styled from "styled-components"
import Card from "../Card/Card"

const GenerosEstilizado = styled.section`

        width: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
        text-align: center;
        font-size: 28px;
        
        div {
            display:flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 10px;
            box-sizing: border-box;
        }
        h3 {
            font-weight: 300;
            display:inline-block;
            border-bottom: 2px solid;
            padding-bottom: 12px;
            }
`

const Generos = (props) => {
    const {colorPrimario, titulo, color} = props.datos
    const obj= {
        backgroundColor: colorPrimario,
        color: color
    }
    return <GenerosEstilizado  style={obj}>

            <h3 style={obj}>{titulo}</h3>
        <div>
            <Card />
        </div>
    </GenerosEstilizado>
}


export default Generos