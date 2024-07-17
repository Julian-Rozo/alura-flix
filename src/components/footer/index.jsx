import styled from "styled-components"

const FooterEstilizado = styled.footer`
footer {
    background-color: #B81D24;
    width:100%;
    box-sizing: border-box;
    bottom: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    
}

footer .top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
}

footer .top a,footer .top p, footer .social-links a {
    color: #F5F5F1;
    text-decoration: none
}

.social-links i {
    padding: 4px;

}
`

const Footer = () => {
    return  <FooterEstilizado>
<footer className="top">
    <div className="top">
        <div>
        </div>
        <p>
            Challenge by <a href="https://www.oracle.com/co/education/oracle-next-education/" target="_blank">ONE - Oracle Next Education</a>. Coded by <a href="https://github.com/Julian-Rozo" target="_blank">Julian-Rozo</a>.
        </p>

        <div className="social-links">
            <a href="https://www.facebook.com/julian.rozo.184/?locale=es_LA" target="_blank"><i className='bx bxl-facebook-square'></i></a>
            <a href="https://www.instagram.com/sjrozo_980?igsh=MWdncmNrY3Fic2d4MQ==" target="_blank"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/rozo-julian/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/Julian-Rozo" target="_blank"><i className='bx bxl-github' ></i></a>
        </div>
    </div>    
    
</footer>
    </FooterEstilizado>
}

export default Footer