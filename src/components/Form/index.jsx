import styled from "styled-components"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaCategoria from "../ListaCategoria/ListaCategoria"
import BtnCrear from "../BtnCrear/BtnCrear"
import { useState } from "react"



const FormEstilizado = styled.form`
  display:grid; 
  justify-items: center;
  padding: 15px;
  color: #F5F5F1;
  margin: 30px 30%;
  margin-bottom: 90px;
  background-color:#221F1F;
  box-shadow: 0px 0px 50px #F5F5F1;
  border-radius: 20px;

form, h2 {
    margin: 10px;
}

form, h3 {
    margin: 0px;
    font-size: 20px;
    font-weight: 300;
}
 
`

const Form = () => {
    const [peliculas, setPeliculas] = useState ([{
        categoria: "Terror",
        titulo: "SAW",
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/saw-2291979.jpg?tf=3840x",
        video:"https://www.youtube.com/watch?v=t3PzUo4P21c",
        descripcion: "John Kramer (Tobin Bell) is back. The most disturbing installment of the SAW franchise yet explores the untold chapter of Jigsaw’s most personal game. Set between the events of SAW I and II, a sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer – only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps."


    }])
    
    
    const registrarPelicula = (pelicula) => {
        console.log("nuevo", pelicula)
        
    }

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDecripcion] = useState("")
   

    const manejarEnvio = (e) => {
            e.preventDefault()
        
            let datosEnviar = {
                titulo: titulo,
                imagen: imagen,
                veideo: video,
                descripcion: descripcion,
                categoria: categoria
            }
           registrarPelicula(datosEnviar)
    }

    return (
        <FormEstilizado registrarPelicula={registrarPelicula} onSubmit={manejarEnvio}>
                <h2>NUEVO VIDEO</h2>
                <h3>¡Complete el formulario para crear una nueva tarjeta de video!</h3>
                
                <CampoTexto 
                    titulo="titulo" 
                    placeholder="Ingrese el título" 
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <CampoTexto 
                    titulo="Imagen" 
                    placeholder="Ingrese el enlace de la imagen" 
                    required
                    valor={imagen}
                    actualizarValor={setImagen}
                />
                <CampoTexto 
                    titulo="Video" 
                    placeholder="Ingrese el enlace del video" 
                    required
                    valor={video}
                    actualizarValor={setVideo}
                />
                <CampoTexto 
                    titulo="Descripcion" 
                    placeholder="¿De qué se trata este video?" 
                    required
                    valor={descripcion}
                    actualizarValor={setDecripcion}
                /> 
                <ListaCategoria
                    valor={categoria}
                    actualizarCategoria={setCategoria}
                    
                />

                <BtnCrear texto="Guardar"/>
                
        </FormEstilizado>
    )
}

export default Form