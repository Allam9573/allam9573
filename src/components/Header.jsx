import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <>
            <Navbar />
            <section id="home" class="container d-flex flex-column justify-content-center vh-100">
                <h1 class="text-center">Bienvenido a mi Portafolio</h1>
                <p class="text-center">Soy un desarrollador junior con conocimientos en Spring Boot, React, Django y MySQL.</p>
            </section>
        </>
    )
}
