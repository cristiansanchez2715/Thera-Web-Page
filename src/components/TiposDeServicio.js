import React from 'react'
import imgWeb from '../asses/sin-fondo/www-removebg-preview.png'
import imgWebApp from '../asses/sin-fondo/webapp-removebg-preview.png'
import imgWebMenu from '../asses/sin-fondo/menu-removebg-preview.png'



function TiposDeServicio() {
  return (
    <div>
<div className='container-title-service'>
    <h1>SERVICIOS</h1>
</div>

        <div className='container-tiposdeservicios'>
<div className='tipodesservicio'>
    <h1>Pagina Web</h1>
    <img className='img-servicio' src={imgWeb} />
    <p className='alternPrice'>500.000$</p>
</div>

<div className='tipodesservicio'>
    <h1>Web App</h1>
    <img className='img-servicio' src={imgWebApp} />
    <p className='alternPrice'>1.000.000$</p>
</div>


<div className='tipodesservicio'>
    <h1>Menu Tiempo Real</h1>
    <img className='img-servicio' src={imgWebMenu} />
    <p className='alternPrice'>1.000.000$</p>
</div>

        </div>
    </div>
  )
}

export default TiposDeServicio