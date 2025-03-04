import './Presentacion.css';

export default function Presentacion() {

    return(
        <div className="contenedor-presentacion">
            <img src="" alt="" />
            <div className="presentacion">
                <h3 className='nombre-pass'>PASSGUARDS</h3>
                <h1 className='subtitulo'>Protege tus cuentas, protege tu vida.</h1>
                <p className='parrafo'> 
                    Como muchos de ustedes, yo solía tener problemas para gestionar mis contraseñas de manera segura. 
                    Entre múltiples cuentas, diferentes requisitos de seguridad y la constante preocupación por posibles filtraciones, me di cuenta de que no estaba solo en este desafío. 
                    Este problema personal se convirtió en la chispa para crear <b>Passguards</b> , una solución diseñada para simplificar y fortalecer la gestión de contraseñas.
                </p>
            </div>
        </div>
    )
}