import './habilidades.css'
import { useState, useEffect, useRef } from 'react';
export default function Habilidades() {


    return (
    <div className='fondo-habilidades'>
        <h1>Estas son algunos de las herramientas y lenguajes que manejo para el desarrollo web</h1>
        <p>Skills lenguajes</p>
            <div >
                <div  className='variante'><i className="devicon-javascript-plain"></i></div>
                <div className='variante'><i className="devicon-typescript-plain"></i></div>
                <div className='variante'><i className="devicon-csharp-plain"></i></div>
                <div className='variante'><i className="devicon-php-plain"></i></div>
                <div className='variante'><i className="devicon-python-plain"></i></div>
                <div className='variante'><i className="devicon-java-plain"></i></div>
            </div>
              <p>Frameworks Frontend</p>
            <div>
                <div className='variante'><i className="devicon-angularjs-plain"></i></div>
                <div className='variante'><i className="devicon-react-original"></i></div>
            </div> 
                <p>Entorno de ejecucion y frameworks Backend</p>
            <div>
                <div className='variante'><i className="devicon-nodejs-plain"></i></div>
                <div className='variante'><i className="devicon-express-original"></i></div>
                <div className='variante'><i className="devicon-nestjs-plain"></i></div>
                <div className='variante'><i className="devicon-dotnetcore-plain"></i></div>
                <div className='variante'><i className="devicon-spring-plain"></i></div>
            </div>
                <p>Motores de base de datos</p>
            <div>
                <div className='variante'><i className="devicon-mysql-plain"></i></div>
                <div className='variante'><i className="devicon-microsoftsqlserver-plain"></i></div>
                <div className='variante'><i className="devicon-azuresqldatabase-plain"></i></div>
                <div className='variante'><i className="devicon-postgresql-plain"></i></div>
                <div className='variante'><i className="devicon-mongodb-plain"></i></div>
            </div>
                 

        
    </div>
    )
}