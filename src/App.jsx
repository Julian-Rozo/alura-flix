
import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles/index'
import Header from './components/Header/index'
import Footer from './components/footer'
import Generos from './components/Generos/Generos'
import { useState } from 'react'


const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #221F1F 40%, #B81D24 120%);
  width: 100%;
  min-height: 100vh;
`  

//Lista Categorias

const categorias = [
  { 
    id: "1",
    titulo:"Acción",
    colorPrimario: "#E50914",
    colorSecundario:"#e5091466",
    color: "#F5F5F1",
    descripcion: "descripción"
  },
  {
    id: "2",
    titulo:"Comedia",
    colorPrimario: "#B81D24",
    colorSecundario:"#b81d2562",
    color: "#F5F5F1",
    descripcion: "descripción"
  },
  {
    id: "3",
    titulo:"Romance",
    colorPrimario: "#F5F5F1",
    colorSecundario:"#f5f5f176",
    color: "#B81D24",
    descripcion: "descripción"
  },
  {
    id: "4",
    titulo:"Terror",
    colorPrimario: "#221F1F",
    colorSecundario:"#221f1f6d",
    color: "#F5F5F1",
    descripcion: "descripción"
  },
  {
    id: "5",
    titulo:"Animada",
    colorPrimario: "#41191b",
    colorSecundario:"#41191b59",
    color: "#F5F5F1",
    descripcion: "descripción"
  }
]



function App() {


  return (
    <>
      <FondoGradiente>
      <GlobalStyles/>
            <Header/>
            
            {
              categorias.map((genero) => <Generos 
              datos={genero} 
              key={genero.id}
             
              />
            )
            }
            <Footer/>    
      </FondoGradiente>
    </>
  )
}

export default App
