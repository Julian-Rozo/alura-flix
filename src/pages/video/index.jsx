import styled from "styled-components"
import Footer from "../../components/footer"
import GlobalStyles from "../../components/GlobalStyles"
import Header from "../../components/Header"
import Form from "../../components/Form"



const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #221F1F 40%, #B81D24 120%);
  width: 100%;
  min-height: 100vh;
`  

function NuevoVideo ({setPeliculas}) {

  
    return(<>
<FondoGradiente>
      <GlobalStyles/>
            <Header/>
            <Form />
  
            <Footer/>    
      </FondoGradiente>  
      </>    
    
    )
}

export default NuevoVideo