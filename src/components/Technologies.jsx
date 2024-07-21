import React from 'react'
import mysql from '../images/mysql.png'
import react from '../images/react.png'
import spring from '../images/spring.png'
import django from '../images/django.png'
import { Navbar } from './Navbar'
export const Technologies = () => {
    return (
        <>
            <Navbar />
            <section id="tecnologias" class="container mt-5">
                <h2 className='text-center display-1 mb-5'>Tecnologías</h2>
                <div class="row">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img className='m-2' src={spring} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img className='m-2' src={react} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img className='m-2' src={django} style={{ width: 200 }} alt="" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img className='m-2' src={mysql} style={{ width: 200 }} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
