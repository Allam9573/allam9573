import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/index.css'
import spring from '../../images/spring.png'
import react from '../../images/react.png'
import mysql from '../../images/mysql.png'
import django from '../../images/django.png'
import logo from '../../images/logo.png'
import clinica from '../../images/clinica.png'
import shop from '../../images/music-shop.png'
import todo from '../../images/todo.png'
import { FaGithub } from "react-icons/fa";

export const Home = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-dark" style={{ backgroundColor: 'black' }} data-bs-theme="dark">
                <div class="container">
                    <Link class="navbar-brand" to={'/allam9573'}>
                        <img src={logo} style={{ width: 250 }} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to={'/allam9573'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/allam9573/technologies'}>Tecnologías</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={''}>Proyectos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={''}>Acerca de mí</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/allam9573/cv'}>Mi Curriculum</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'https://github.com/Allam9573'} target='_blank' className='d-flex h-100 align-items-center justify-content-center' >
                                    <FaGithub className='fs-5 ms-2 text-white py-auto' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="home" class="text-white px-5 header d-flex flex-column justify-content-center vh-100">
                <h1 class="text-center display-1">Bienvenido a mi Portafolio</h1>
                <p class="text-center fs-3">Hola mi nombre es Allam Argueta, soy un desarrollador junior con conocimientos en Spring Boot, React.js, Django y MySQL.</p>
                <Link className='btn btn-primary btn-lg px-5 py-3 mx-auto rounded-pill'>Ver Mas</Link>
            </section>
            <section id="tecnologias" style={{ backgroundColor: 'whitesmoke' }} class="py-5 mb-5">
                <h2 className='text-center display-1 mb-5'>Tecnologías</h2>
                <div class="container mx-auto pb-5 row w-100 mt-5">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={spring} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={react} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={django} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={mysql} style={{ width: 200 }} alt="" />
                    </div>
                </div>
            </section>


            <section id="proyectos" class="container my-5">
                <h2 className='display-1 text-center'>Proyectos</h2>
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <img src={clinica} style={{ width: 250 }} alt="" />
                                <div className="card-title my-2">
                                    <h3 className='text-secondary'>Sistema de Citas Medicas</h3>
                                </div>
                                <p class="card-text">Una aplicacion de citas medicas.</p>
                                <Link className='btn btn-success' to={'https://clinicamadys.netlify.app/citas'} target='_blank'>Ver Aplicacion</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <img src={shop} style={{ width: 250 }} alt="" />
                                <div className="card-title my-2">
                                    <h3 className='text-secondary'>Tienda de Guitarras</h3>
                                </div>
                                <p class="card-text">Una aplicacion de citas medicas.</p>
                                <Link className='btn btn-success' to={'https://allam-guitar.netlify.app/'} target='_blank'>Ver Aplicacion</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <img src={todo} style={{ width: 250 }} alt="" />
                                <div className="card-title my-2">
                                    <h3 className='text-secondary'>Todo List</h3>
                                </div>
                                <p class="card-text">Una aplicacion de tareas por terminar.</p>
                                <Link className='btn btn-success' to={'https://allam-notes.netlify.app/'} target='_blank'>Ver Aplicacion</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <img src={todo} style={{ width: 250 }} alt="" />
                                <div className="card-title my-2">
                                    <h3 className='text-secondary'>Todo List</h3>
                                </div>
                                <p class="card-text">Una aplicacion de tareas por terminar.</p>
                                <Link className='btn btn-success' to={'https://allam-notes.netlify.app/'} target='_blank'>Ver Aplicacion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="acerca-de-mi" class="container my-5">
                <h2>Acerca de mí</h2>
                <p>Soy un desarrollador apasionado por la tecnología y siempre estoy buscando aprender y mejorar mis habilidades. Me especializo en el desarrollo de aplicaciones web utilizando tecnologías modernas como Spring Boot, React, Django y MySQL.</p>
            </section>

            <footer class="bg-dark text-white text-center p-3 mt-5">
                &copy; 2024 Allam Argueta. Todos los derechos reservados.
            </footer>
        </>
    )
}
