import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <Link class="navbar-brand" to={'/allam9573'}>
                        <img src={logo} style={{width:250}} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to={'/allam9573'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/allam9573/technologies'}>Tecnologías</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#proyectos">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#acerca-de-mi">Acerca de mí</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
