import './proyectos.css'

export default function Proyectos() {
    return (
    <div className='fondo-proyectos'>
        <h1 >Mis proyectos</h1>
        <div className='conct-pro'>
            <a href="https://github.com/KeslyUA/SimuladorCombate.git" className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/loki vs thor.png" alt="Simulador de Combate" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Simulador de Combate RPG (Java Engine)</h2>
                    
                    <div>
                        <h3 className='subtitulo'>Propósito:</h3>
                        <p className='descripcion'>
                            Motor de simulación de batallas por turnos que calcula enfrentamientos automáticos basados en estadísticas de personajes, probabilidad de acierto y daño crítico.
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

                </div>
            </a>
            <a href="https://github.com/KeslyUA/Sistema_Minimarket.git" className='pro' target="_blank" rel="noreferrer">
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
                </div>
            </a>

            <a href="https://github.com/KeslyUA/BackEndProyecto.git" className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/backend-clinica.png" alt="Kesly" />
                <div className='info-proyecto'>
                    <h2 className='titulo' >API de Gestión Clínica y Reportes</h2>
                    <div>
                        <h3 className='subtitulo'>Proposito:</h3>
                        <p className='descripcion'>Desarrollo de una Web API robusta para la centralización de historiales clínicos, permitiendo la gestión eficiente de pacientes y la generación de reportes médicos automatizados bajo altos estándares de seguridad. </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>

                        <ul className='enunciado'>
                            <li><span>C# & .NET 6: </span>Implementación de ASP.NET Core para un backend escalable y de alto rendimiento.</li>
                            <li><span>Entity Framework Core: </span>ORM para el mapeo y gestión eficiente de la base de datos SQL Server.</li>
                            <li><span>Arquitectura en Capas: </span>Separación clara de lógica de negocio, acceso a datos y controladores (Patrón Repository/Service).</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Endpoints RESTful: </span>CRUD completo para el manejo de pacientes, citas y diagnósticos. </li>
                            <li><span>Generación de Reportes: </span>Lógica de servidor para procesar datos clínicos y exportar reportes detallados. </li>
                            <li><span>Seguridad de Datos: </span>Implementación de validaciones y DTOs para proteger la información del paciente. </li>
                        </ul>
                    </div>

                    
                    
                
                </div>
            </a>

            <a href="hhttps://github.com/KeslyUA/FrondProyecto.git" className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/clinica.png"  /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>Portal de Gestion Clinica (FrontEnd)</h2>

                    <div>
                        <h3 className='subtitulo'>Proposito:</h3>
                        <p className='descripcion'>Interfaz administrativa de alto rendimiento diseñada para la visualización y gestión de expedientes médicos, optimizando la interacción del usuario mediante componentes reactivos y flujos de trabajo intuitivos. </p>
                    </div>

                    <div>
                        <h3 className='subtitulo'>Tecnologías Clave:</h3>
                        <ul className='enunciado'>
                            <li><span>Angular 14: </span>Framework robusto para la creación de una SPA (Single Page Application) escalable y tipada con TypeScript.</li>
                            <li><span>Angular Material: </span>Implementación de componentes de UI premium para una experiencia de usuario (UX) moderna y accesible.</li>
                            <li><span>RxJS: </span>Gestión avanzada de flujos de datos asíncronos y comunicación eficiente con la API.</li>
                            <li><span>Reactive Forms: </span>Manejo complejo de formularios con validaciones en tiempo real para el registro de datos clínicos.</li>
                            <li><span>Moment.js: </span>Procesamiento y formateo preciso de fechas y agendas médicas.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='subtitulo'>Funcionalidades:</h3>
                        <ul className='enunciado'>
                            <li><span>Gestión de Formularios: </span>Entrada de datos estructurada para diagnósticos, pacientes y tratamientos.</li>
                            <li><span>Navegación Fluida: </span>Sistema de enrutamiento (Angular Router) para una transición instantánea entre secciones sin recarga de página.</li>
                            <li><span>Consumo de API REST: </span>Integración completa con el backend de .NET para la persistencia de datos en tiempo real.</li>
                            <li><span>Dashboard Médico:</span>Panel de control centralizado con acceso rápido a las funciones principales del sistema.</li>
                        </ul>
                    </div>
                </div>
            </a>

            <a href="https://github.com/KeslyUA/Api-veterinaria.git" className='pro' target="_blank" rel="noreferrer">
                <img src="/PortafolioNuevo/img/vetapi.png" alt="API Veterinaria" /> 
                <div className='info-proyecto'>
                    <h2 className='titulo'>API Veterinaria</h2>

                    <div>
                        <h3 className='subtitulo'>Proposito:</h3>
                        <p className='descripcion'>
                            Desarrollo de una API REST para la gestión de una clínica veterinaria, permitiendo administrar información de pacientes, consultas médicas y operaciones del sistema mediante una arquitectura backend organizada y escalable.
                            esta API fue desarrollada como backend para sistemas de gestión clínica y puede integrarse fácilmente con aplicaciones frontend modernas desarrolladas en frameworks como React o Angular.
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
                </div>
            </a>

            <a href="https://github.com/KeslyUA/Foro-publico.git" className='pro' target="_blank" rel="noreferrer">
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
                </div>
            </a>

            <a href="https://github.com/KeslyUA/proyecto1.git" className='pro' target="_blank" rel="noreferrer">
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
                </div>
            </a>
        </div>
        
             

        </div>
    )
}