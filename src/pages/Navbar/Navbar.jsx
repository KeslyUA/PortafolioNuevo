import './navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
   
    return (
       
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
            <NavLink to="/sobreMi" className={({ isActive }) => isActive ? "active" : ""}>Sobre mi</NavLink>
            <NavLink to="/habilidades" className={({ isActive }) => isActive ? "active" : ""}>Habilidades</NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
            
        </nav>
        
        
    )
}