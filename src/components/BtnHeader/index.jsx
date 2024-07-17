import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnHeaderEstilizado = styled.div`
    display:flex;
    justify-content: space-around;
    width: 400px;
  
    a{
    display:flex;
    align-items:center;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    color: #F5F5F1;
    width: 150px;
    border-radius: 20px;
    font-size: 18px;
    border: 3px solid #B81D24;
    cursor: pointer;
    }

    a:hover {
        border: 3px solid  #E50914;
        background-color: #E50914;
        box-shadow: 0px 5px 70px rgb(246, 4, 24);
        transform: translateY(-5px);
        transition: all 0.3s ease;
        font-size: 20px;
        cursor: pointer;
    }

    
`


const BtnHeader = () => {
    return <BtnHeaderEstilizado>
            <Link to="/">Home</Link>
            <Link to="/nuevo">Nuevo video</Link>
    </BtnHeaderEstilizado>
}

export default BtnHeader