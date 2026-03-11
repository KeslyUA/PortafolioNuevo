import { useNavigate } from 'react-router-dom';
import './Inicio.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Inicio() {
    
    const navigate = useNavigate();
    return (
        <div className='fondo-inicio'>

        <img src="../img/nube.png" alt="" className='nube' />
        <img src="../img/nube.png" alt="" className='nube-dos' />
        <img src="../img/nube.png" alt="" className='nube-tres' />
        <img src="../img/nube.png" alt="" className='nube-cuatro' />
        <img src="../img/chopper.webp" alt="" className='chopper' />
        <img src="../img/lufy.gif" alt="" className='luffy' />
        <img src="../img/mando.webp" alt="" className='mando' />
        <img src="../img/mando.webp" alt="" className='mando-dos' />


      <div className='marco-fondo'>
        <div className='fondo'>

          <h1 className='letra'>Bienvenidos a mi portafolio</h1>
          <img src="../img/Kesly.png" alt="Kesly" className='foto' />
            <p className='nombre'>Kesly Ureta Aguilar</p>
          <button className='start' onClick={() => navigate('/sobreMi')}><p className='pixel'>Start ▶</p></button>
          <br />
          <div className='links'>
            <a href="https://github.com/KeslyUA" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/kesly-ureta-aguilar-061a1a267/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:kesly2805@gmail.com" title="kesly2805@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href="https://wa.me/972056471" title='972056471' target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
            </a>
          </div>
          
        </div>
        
      </div>

      
       

     </div>
    )
}