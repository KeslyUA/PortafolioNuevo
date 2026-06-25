import './proyectos.css';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import Button from '@mui/material/Button';

export default function Proyectos() {
    return (
    <div className='fondo-proyectos'>
        <h1 >Mis proyectos</h1>
        <div className='conct-pro'>
            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/biblioteca.png" alt="Bus" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Sistema de Gestión de prestamos de libros</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            El sistema de gestión de préstamos de libros tiene como objetivo principal digitalizar 
                            y automatizar el proceso de administración de una biblioteca, permitiendo un control eficiente 
                            de los libros, usuarios y movimientos de préstamo y devolución.
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>Backend: </span>Java 17,Spring Boot 4.1.0(Spring Web,Spring Data JPA)</li>
                            <li><span>Frontend: </span>Angular 21</li>
                            <li><span>Base de Datos: </span>PostgreSQL</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Registro de libros: </span>Se encarga de guardar,editar, eliminar información de libro y emitir documento pdf de contrato de prestamo .</li>
                            <li><span>Registro de usuario: </span>Registra los datos del usuario con la autentificación de su DNI(integración de api DNI reniec),
                            se seleccionaran los libros prestados y con fecha de prestamos se calculara el plazo de devolución automaticamente.</li>
                            <li><span>Historial de prestamo: </span>Muestra el registro de prestamos pendientes con estado (activo/moroso)para identificar retraso de devolución y genera reporte de prestamos.</li>
                            <li><span>Dashboard: </span>Panel estadístico para identificar ranking de libros y autores mas demandados.</li>
                            <li><span>Proceso de devolucion de libro: </span>filtra usuario,detecta libros prestados,verificar estado
                            de libro devuelto y realiza calculo de monto de penalizacion si lo amerita.</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="overlay">
                    <Button variant="outlined" href="https://github.com/KeslyUA/Biblioteca.git">
                        <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> FrontEnd
                    </Button>
                    <Button variant="outlined" href="https://github.com/KeslyUA/Backend-biblioteca.git">
                        <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> BackEnd
                    </Button>
                </div>
            </div>
            <div className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/bus.png" alt="Bus" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Sistema de Gestión de Buses</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            El objetivo principal de este proyecto FullStack es proporcionar una herramienta administrativa eficiente 
                            que permita listar y consultar información detallada de los buses de la flota. 
                           
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>Backend: </span>Desarrollado con Java 17 y Spring Boot 3.5. He implementado Spring Data JPA con Hibernate</li>
                            <li><span>Frontend: </span>React 19 con TypeScript y Vite. La interfaz es moderna, tipada y reactiva.</li>
                            <li><span>Base de Datos: </span>MySQL 8.0, asegurando una gestión relacional de datos sólida y confiable.</li>
                            <li><span>Seguridad: </span>Implementación de Spring Security para la protección de endpoints sensibles (CORS y Autenticación).</li>
                            <li><span>Despliegue y DevOps: </span>Docker y Docker Compose para garantizar que el sistema funcione de forma idéntica en cualquier entorno de desarrollo o producción.</li>
                            <li><span>UI Framework: </span>Material UI (MUI) para una estética profesional y componentes responsivos.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Listado General de Buses: </span>Una tabla interactiva que muestra todos los buses registrados, con carga optimizada desde la API.</li>
                            <li><span>Consulta Detallada: </span>Capacidad de consultar información específica de un bus mediante su ID único.</li>
                            <li><span>Seguridad por Endpoints: </span>Acceso restringido mediante credenciales configuradas, protegiendo la información de la flota.</li>
                            <li><span>Paginación: </span>Mi backend solo envía los datos necesarios para la página actual, lo que reduce drásticamente el ancho de banda y mejora la experiencia del usuario final en conexiones lentas.</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined"  href="https://github.com/KeslyUA/SistemaDeGestionDeBuses.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> FrontEnd y BackEnd
                        </Button>
                        
                    </div>
                </div>
            </div>

            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/loki vs thor.png" alt="Simulador de Combate" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Simulador de Combate RPG (Java Engine)</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            Motor de simulación de batallas por turnos que calcula enfrentamientos automáticos basados en estadísticas de personajes, 
                            probabilidad de acierto y daño crítico.
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>Lógica Algorítmica: </span>Implementación de fórmulas matemáticas para el cálculo de daño, defensa y evasión.</li>
                            <li><span>Gestión de Colecciones: </span>Manejo de inventarios y listas de habilidades mediante estructuras de datos eficientes.</li>
                            <li><span>Programación Orientada a Objetos: </span>Modelado de entidades (Héroes/Enemigos) con atributos únicos y comportamientos heredados.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Sistema de Turnos: </span>Control secuencial del flujo de combate con gestión de tiempos de espera (Cooldowns).</li>
                            <li><span>Generación Aleatoria: </span>Algoritmos de probabilidad para determinar resultados críticos y variaciones de daño.</li>
                            <li><span>Registro de Combate: </span>Bitácora detallada de eventos (Log) para el seguimiento de cada acción realizada durante la batalla.</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined" href="https://github.com/KeslyUA/SimuladorCombate.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> BackEnd
                        </Button>
                    </div>

                </div>
            </div>
            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/minimaket.png" alt="Sistema Minimarket" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Sistema Integral Minimarket</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            Software de gestión comercial diseñado para optimizar el control de inventarios, procesos de venta y administración de proveedores en tiempo real.
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>React & Vite: </span> Frontend de última generación para una interfaz de usuario rápida, reactiva y optimizada (SPA).</li>
                            <li><span>Node.js & Express: </span> Backend robusto y ligero encargado de gestionar las APIs RESTful y la lógica del servidor.</li>
                            <li><span>Prisma ORM: </span> Capa de acceso a datos moderna que garantiza consultas seguras, tipos fuertes (Type-safe) y una comunicación eficiente con la base de datos.</li>
                            <li><span>MySQL: </span> Base de datos relacional (gestionada vía Prisma) para el almacenamiento estructurado de productos, ventas y usuarios.</li>
                            <li><span>Arquitectura desacoplada (Client-Server): </span> Separación clara entre el cliente (React) y el servidor (Express), permitiendo un mantenimiento independiente y alta escalabilidad.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Control de Stock: </span> Alertas de productos bajos y gestión automatizada de entradas y salidas.</li>
                            <li><span>Módulo de Ventas: </span> Generación de comprobantes y cálculo automático de totales.</li>
                            <li><span>Reportes: </span>Graficos estadisticos de reporte de venta y productos</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined" href="https://github.com/KeslyUA/Sistema_Minimarket.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> Frontend y Backend
                        </Button>
                    </div>
                </div>
            </div>

            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/backend-clinica.png" alt="Kesly" />
                <div className='info-proyecto'>
                    <h2 className='titulo' >Sistema de Gestión Clínica y Reportes</h2>
                    <div>
                        <h3 className='subtitulo'>Proposito:</h3>
                        <p className='descripcion'>Desarrollo de una Web robusta para la centralización de historiales clínicos, permitiendo la gestión eficiente de pacientes y la generación de reportes médicos automatizados bajo altos estándares de seguridad. </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>

                        <ul className='enunciado'>
                            <li><span>Frontend: </span>Angular 14,RxJS,Angular Material</li>
                            <li><span>BackEndtend: </span>C# & .NET 6,Entity Framework Core</li>
                            <li><span>Base de datos: </span>Sql serve</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Registro de citas: </span>CRUD completo para el manejo de pacientes, agendacion de citas. </li>
                            <li><span>Generación de Reportes: </span>Lógica de servidor para procesar datos clínicos y exportar reportes detallados. </li>
                            <li><span>Seguridad de Datos: </span>Implementación de validaciones y DTOs para proteger la información del paciente. </li>
                        </ul>
                    </div>

                    <div className="overlay">
                        <Button variant="outlined" href="hhttps://github.com/KeslyUA/FrondProyecto.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> FrontEnd
                        </Button>
                        <Button variant="outlined" href="https://github.com/KeslyUA/BackEndProyecto.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> BackEnd
                        </Button>
                    </div>
                    
                
                </div>
            </div>


            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/vetapi.png" alt="API Veterinaria" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>API Veterinaria</h2>

                    <div>
                        <h3 className='subtitulo'>Proposito:</h3>
                        <p className='descripcion'>
                            Desarrollo de una API REST para la gestión de una clínica veterinaria, permitiendo administrar información de pacientes, consultas médicas y operaciones del sistema mediante una arquitectura backend organizada y escalable.
                            
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>C# / .NET 6: </span>Framework utilizado para construir una API robusta, segura y de alto rendimiento.</li>
                            <li><span>ASP.NET Core Web API: </span>Permite la creación de endpoints REST que gestionan la comunicación entre cliente y servidor.</li>
                            <li><span>SQL Server: </span>Sistema de base de datos relacional utilizado para almacenar y gestionar la información de pacientes, consultas y registros clínicos.</li>
                            <li><span>Arquitectura por Capas: </span>Sistema de base de datos relacional utilizado para almacenar y gestionar la información de pacientes, consultas y registros clínicos.</li>
                            <li><span>DTOs: </span>Estructuras utilizadas para transferir datos entre cliente y servidor evitando exponer directamente los modelos internos.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Gestión de Pacientes: </span> Registro y administración de mascotas dentro del sistema clínico.</li>
                            <li><span>Operaciones CRUD: </span>Creación, lectura, actualización y eliminación de registros mediante endpoints REST.</li>
                            <li><span>Separación de Responsabilidades: </span>Uso de servicios e interfaces para mantener una arquitectura limpia y escalable.</li>
                            <li><span>Persistencia de Datos: </span> Almacenamiento seguro de información clínica mediante SQL Server.</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined" href="https://github.com/KeslyUA/Api-veterinaria.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> BackEnd
                        </Button>
                    </div>
                </div>
            </div>

            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/foro.png" alt="Foro Público" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Plataforma de Foro Público</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            Espacio digital colaborativo diseñado para el intercambio de ideas, permitiendo a los usuarios crear hilos de discusión y participar en comunidades temáticas.
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>NestJS & TypeScript: </span>Arquitectura de servidor robusta y escalable basada en módulos y servicios.</li>
                            <li><span>React & Vite: </span>Frontend moderno enfocado en la velocidad de carga y una experiencia de usuario altamente reactiva.</li>
                            <li><span>MySQL: </span>Sistema de gestión de base de datos relacional utilizado para garantizar la persistencia e integridad de las discusiones y usuarios.</li>
                            <li><span>TypeORM: </span>Implementación de Mapeo Objeto-Relacional para la gestión eficiente de consultas y relaciones complejas entre entidades.</li>
                            <li><span>Autenticación Robusta: </span>Sistema de seguridad basado en validación de credenciales y protección de endpoints.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Gestión de Hilos: </span>Creación, edición y eliminacion conversación.</li>
                            <li><span>Sistema de Comentarios: </span>Interacción multinivel que permite debates estructurados y dinámicos.</li>
                            <li><span>Autenticación: </span>Registro de usuarios con validación de credenciales por medio de envio de correo de autentificacion para una participación segura.</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined" href="https://github.com/KeslyUA/Foro-publico.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> FrontEnd y Backend
                        </Button>
                    </div>
                </div>
            </div>

            <div  className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/inventario.png" alt="Sistema de Inventario" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Sistema de Gestión de Inventarios</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            Plataforma centralizada para el control de activos y mercadería, permitiendo un seguimiento preciso del flujo de productos en almacén.
                        </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>MERN Stack:</span>Desarrollo robusto utilizando MongoDB para persistencia de datos flexible y Express para una API REST veloz.</li>
                            <li><span>Frontend Moderno:</span>Interfaz reactiva desarrollada con React y Vite, asegurando una experiencia de usuario fluida y tiempos de carga mínimos.</li>
                            <li><span>NoSQL Data Modeling:</span>Estructura de datos optimizada en MongoDB para el manejo dinámico de stock, categorías y proveedores.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Registro de Movimientos: </span>Trazabilidad completa de cada producto desde su ingreso hasta su despacho.</li>
                            <li><span>Categorización Inteligente: </span>Clasificación de productos por familias, marcas y proveedores.</li>
                            <li><span>Reportes Dinámicos: </span>Generación de vistas detalladas sobre el estado actual del inventario</li>
                        </ul>
                    </div>
                    <div className="overlay">
                        <Button variant="outlined" href="https://github.com/KeslyUA/proyecto1.git">
                            <InsertLinkTwoToneIcon></InsertLinkTwoToneIcon> FrontEnd y Backend
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
             

        </div>
    )
}