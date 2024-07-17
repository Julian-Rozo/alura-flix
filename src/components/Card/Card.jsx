import styled from "styled-components"

const CardEstilizado = styled.div`

div {
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}

`



const Card = (props) => {
    return <CardEstilizado>

        <div>
            <img src="https://i.blogs.es/94f9a8/infinity-war/840_560.jpeg" alt="End Game" />
            <h4>End Game</h4>
            <h5></h5>
        </div>

    </CardEstilizado>

}

export default Card
