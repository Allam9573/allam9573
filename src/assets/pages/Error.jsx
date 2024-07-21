import React from 'react'
import { Navbar } from '../../components/Navbar'
import error from '../../images/error.png'
import { Link } from 'react-router-dom'
export const Error = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <img src={error} style={{ width: '25%' }} alt="" />
        <p className='display-5 text-secondary'>Ups! No hemos encontrado el recurso solicitado :(</p>
        <Link to={'/allam9573'} className='btn btn-primary btn btn-lg px-5 py-3 mx-auto rounded-pill'>Volver</Link>
      </div>
    </>
  )
}
