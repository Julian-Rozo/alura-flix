import styled from "styled-components"
import BtnHeader from "../BtnHeader"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 40px;

    img {
        width: 300px;
        mask-image: linear-gradient( #221F1F 90%, transparent);
    }

`

const Header = () => {
    return <HeaderEstilizado>
        <img src="/public/img/logo.png" alt="logo de Alura Flix" />
     <BtnHeader/>
    </HeaderEstilizado>
}

export default Header