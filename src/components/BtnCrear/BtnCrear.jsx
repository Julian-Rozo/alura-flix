import styled from "styled-components"

const BtnCrearEstilizado = styled.button`
    background-color: transparent;
    color: #F5F5F1;
    margin-top: 20px;
    width: 150px;
    height: 50px;
    border-radius: 20px;
    font-size: 18px;
    border: 3px solid #B81D24;
    cursor: pointer;

    &:hover {border: 3px solid  #E50914;
        background-color: #E50914;
        box-shadow: 0px 5px 70px rgb(246, 4, 24);
        transform: translateY(-5px);
        transition: all 0.3s ease;
        font-size: 20px;
        cursor: pointer;
    }
    

`

const BtnCrear = (props) => {
    return <BtnCrearEstilizado>{props.texto}</BtnCrearEstilizado>
}

export default BtnCrear