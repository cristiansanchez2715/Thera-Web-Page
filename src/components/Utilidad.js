import React from 'react'
import imgutilidad from '../asses/img-utilidad.avif'

function Utilidad() {
  return (
    <div className='container-utilidad'>
        <div className='container-img-utilidad'>
            <img src={imgutilidad} className='img-utilidad' />
        </div>
<div className='container-utillidad-information'>
    <h1>En que me beneficia una pagina web?</h1>
    <p className='parrafo-pagina-web'>Una página web ofrece a una empresa visibilidad global, aumenta su credibilidad y facilita el marketing efectivo. Proporciona disponibilidad continua, comunicación directa con clientes, diferenciación competitiva, generación de leads y análisis para mejoras continuas. Es una herramienta esencial para el éxito en la era digital.</p>
<ul className='list-items'>
    <li className=''>Alcance global: Llega a clientes en todo el mundo.</li>
    <li className=''>Credibilidad: Demuestra profesionalismo y confiabilidad.</li>
    <li className=''>Marketing eficaz: Promociona productos y servicios.</li>
    <li className=''>Disponibilidad 24/7: Accesible en cualquier momento.</li>
    <li className=''>Comunicación directa: Interactúa con los clientes fácilmente.</li>
    <li className=''>Diferenciación: Destácate entre la competencia.</li>
    <li className=''>Generación de leads: Captura clientes potenciales.</li>
    <li className=''>Análisis y mejora: Obtén información para mejorar continuamente.</li>
</ul>
</div>

    </div>
  )
}

export default Utilidad