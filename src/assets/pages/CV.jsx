import React from 'react'
import { Navbar } from '../../components/Navbar'
import profile from '../../images/profile.jpg'
import '../../css/cv.css'
import books from '../../images/books.png'

export const CV = () => {
  return (
    <>
      <Navbar />
      <div className="card shadow rounded-top w-75 mx-auto mt-5">
        <div className="card-header bg-primary">
          <div className="card-title text-center text-white">
            <h3>Curriculum Vitae</h3>
          </div>
        </div>
        <div className="p-5 card-body">
          <div className="card mb-5 shadow">
            <div className="row">
              <div className="col-md-4 col-sm-12 rounded-start  p-5 bg-dark">
                <img src={profile} className='profile' alt="" />
              </div>
              <div className="col-md-8 col-sm-12">
                <h1 className='display-1 mx-3'>Allam Argueta</h1>
                <hr />
                <div>
                  <span className='title-about'>Acerca de mi</span>
                  <p className='description'>Soy un desarrollador junior, estudiante de la carrera de ingenieria en
                    sistemas, con conocimientos básicos en Spring Boot, React.js, Django y
                    MySQL. Tengo experiencia en la construcción de aplicaciones web tanto
                    en el frontend como en el backend. Me entusiasma el poder aprender y
                    mejorar mis habilidades, asi como también colaborar en proyectos que
                    me permitan crecer profesionalmente.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-5 shadow">
            <div className="row">
              <div className="col-md-4 col-sm-8 rounded-start p-5">
                <img src={books} className='books' alt="" />
              </div>
              <div className="col-md-4 col-sm-8 py-5">
                <span className='title-about'>Educacion</span>
                <hr />
                <div>
                  <p className='description'>Soy un desarrollador junior, estudiante de la carrera de ingenieria en
                    sistemas, con conocimientos básicos en Spring Boot, React.js, Django y
                    MySQL. Tengo experiencia en la construcción de aplicaciones web tanto
                    en el frontend como en el backend. Me entusiasma el poder aprender y
                    mejorar mis habilidades, asi como también colaborar en proyectos que
                    me permitan crecer profesionalmente.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-5 shadow">
            <div className="row">
              <div className="col-4 rounded-start p-5" style={{ backgroundColor: 'whitesmoke' }}>
                <img src={books} className='books' alt="" />
              </div>
              <div className="col-8">
                <span className='title-about'>Contacto</span>
                <hr />
                <div>
                  <p className='description'>Soy un desarrollador junior, estudiante de la carrera de ingenieria en
                    sistemas, con conocimientos básicos en Spring Boot, React.js, Django y
                    MySQL. Tengo experiencia en la construcción de aplicaciones web tanto
                    en el frontend como en el backend. Me entusiasma el poder aprender y
                    mejorar mis habilidades, asi como también colaborar en proyectos que
                    me permitan crecer profesionalmente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
