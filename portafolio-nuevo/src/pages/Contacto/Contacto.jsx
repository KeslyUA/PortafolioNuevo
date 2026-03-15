import '../Contacto/Contacto.css';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_itbelsd', 
            'template_6fpw0gk', 
            form.current, 
            'F_hQkfnl3HX1DUwD8' 
        )
        .then(() => {
            console.log('¡ÉXITO!');
            alert("Mensaje enviado con éxito");
            form.current.reset(); 
        }, (error) => {
            console.log('FALLÓ...', error);
            alert("Error: " + error.text);
        });
    };
        
    return (
        <div className='fondo-contacto'>
            <div>
                <h1 className='ti-contacto'>Contacto</h1>
                <p>Gracias por visitar mi página!</p>
                <h3>Puedes contactarme o darme tu opinión.</h3>
            </div>
            

            <form className="formulario" ref={form} onSubmit={sendEmail}>
                <input type="text" name='nombre' placeholder='Nombre' required />
                <input type="email" name='correo' placeholder='Correo' required />
                <textarea name='mensaje' placeholder='Mensaje' required></textarea>
                
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Enviar
                </Button>
            </form>
            <p id="estado-mensaje"></p>
        </div>
    );
}