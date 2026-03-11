import './sobreMi.css'
import { useNavigate } from 'react-router-dom';
import Inicio from '../Inicio/Inicio';
import Proyectos from '../Proyectos/Proyectos';
import Habilidades from '../Habilidades/Habilidades';

export default function SobreMi() {
    const navigate = useNavigate();
   
    return (
        
    <div className='fondo-sobreMi'>
        <img src="/PortafolioNuevo/img/nube.png" className='nube' />
        <img src="/PortafolioNuevo/img/nube.png" className='nube-dos' />
        <img src="/PortafolioNuevo/img/nube.png" className='nube-tres' />
        <img src="/PortafolioNuevo/img/chopper.webp" className='chopper' />
        <img src="/PortafolioNuevo/img/lufy.gif" className='luffy' />

        
        
        <div className='contenido'>
            <button className='boton' onClick={() =>navigate('/')}>◀</button>
            <div className="cuadro">
                <div className='cont-pixel'>
                    <h2 className='manpore'>Hola mi nombre es Kesly, soy desarrolladora web en formación.<br/>
                        Me apasiona el mundo de la tecnología y la programación, y estoy emocionada de compartir mi viaje de aprendizaje con ustedes. En este portafolio, encontrarás proyectos en los que he trabajado, mis habilidades técnicas y mi experiencia en el desarrollo web. Estoy comprometida a seguir creciendo como desarrolladora y a contribuir al mundo digital con soluciones creativas e innovadoras. <br/>¡Gracias por visitar mi portafolio!
                    </h2>
                </div>
            
            <img src="/PortafolioNuevo/img/ga.gif" alt="gif"  className='gif'/>
            </div>
            <button className='boton' onClick={() =>navigate('/habilidades')}>▶</button>
            
        </div>
        
       
        
    </div>)
}