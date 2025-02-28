import { useState } from 'react';
import './Inicio.css';
import Botonera from '../Botonera/Botonera';

export default function Inicio(){

    const [abrirPrincipal, setAbrirPrincipal] = useState(false);

    const cerrarBotonera = () => setAbrirPrincipal(false);

    return(
        <div className="contenedor-inicio">
            <div className="contenedor-titulo"><h1>Administrar y generar contraseñas</h1></div>
            <div className="contenedor-inicio-info">
                <h2>Algunos consejos generales para estar seguros en internet</h2>

                <h3>Usá contraseñas fuertes</h3>
                <p><b>Longitud: </b> Las contraseñas deben tener al menos 12 caracteres.</p>
                <p><b>Complejidad: </b> Combina letras <b>mayúsculas, minúsculas, números y símbolos</b> (por ejemplo, A7$dE3!fG5@). </p>
                <p><b>Evita palabras: </b> No uses palabras del diccionario, nombres o fechas importantes (como cumpleaños).  </p>

                <h3>No Reutilices Contraseñas</h3>
                <p><b>Cada cuenta debe tener una contraseña única.</b> Si un sitio web es comprometido, reutilizar contraseñas puede poner en riesgo todas tus otras cuentas.</p>

                <h3>Activa la Autenticación de Dos Factores (2FA)</h3> 
                <p><b>La 2FA añade una capa adicional de seguridad. </b>Incluso si alguien obtiene tu contraseña, no podrá acceder sin el segundo factor (como un código enviado a tu teléfono).</p>

                <h3>Manten tu software actualizado</h3>
                <p>Asegúrate de que tu navegador, sistema operativo y aplicaciones estén siempre actualizados para protegerte contra vulnerabilidades conocidas.</p>

                <h3>Sé Cauteloso con Enlaces y Archivos Adjuntos</h3>
                <p>No hagas clic en enlaces sospechosos ni descargues archivos adjuntos de correos electrónicos no confiables. <b>Esto puede exponerte a ataques de phishing o malware. </b></p>

                <h2>¿Por Qué Es Importante Usar Contraseñas Seguras?</h2>
                <p><b>Las contraseñas son la primera línea de defensa para proteger tus cuentas en línea</b>. Sin embargo, crear contraseñas seguras puede ser complicado y tedioso. Una contraseña débil o reutilizada puede exponerte a riesgos como:</p>
                <p><b>Robo de identidad:</b> Los hackers pueden acceder a tus cuentas bancarias, redes sociales y correos electrónicos.</p>
                <p><b>Phishing: </b> Los ciberdelincuentes pueden engañarte para obtener tus credenciales.</p>
                <p><b>Violaciones de datos:</b> Los ciberdelincuentes pueden engañarte para obtener tus credenciales.</p>

                <h3>El Problema con las Contraseñas Manuales</h3>
                <p><b>Difícil de recordar: </b> Las contraseñas seguras suelen ser largas y complejas. </p>
                <p><b>Tiempo consumido: </b> Tienes que pensar en una nueva contraseña única para cada cuenta. </p>
                <p><b>Riesgo de errores: </b> Es fácil cometer errores al escribir contraseñas complejas. </p>

                <h3>La solución: <b>Usa nuestro generador de contraseñas</b></h3>
                <p>Con nuestro administrador de contraseñas, ya no tienes que preocuparte por crear contraseñas seguras. ¡Nosotros lo hacemos por ti! Aquí está cómo funciona: </p>
                <h2><b>Genera Contraseñas Fuertes en Un Solo Clic</b></h2>
                <p>Nuestro generador de contraseñas crea automáticamente contraseñas seguras que cumplen con los estándares más altos:</p>
                <p><b>Longitud personalizable: </b> Desde 9 hasta 15 caracteres.</p>
                <p><b>Complejidad garantizada: </b> Combina letras mayúsculas, minúsculas, números y símbolos.</p>
                <p><b>Aleatoriedad total: </b>Las contraseñas son completamente aleatorias e imposibles de adivinar. </p>

                <h3>Almacena Tus Contraseñas de Forma Segura</h3>
                <h4>No solo generamos contraseñas, sino que también las almacenamos de manera cifrada en tu cuenta. <b>Esto significa que: </b></h4>
                <p>Nunca tendrás que recordarlas todas. </p>
                <p>Tus contraseñas estan protegidas. </p>
                <p>Solo tú puedes acceder a tus contraseñas. </p>

                <h3>Accede Desde Cualquier Lugar</h3>
                <p>Nuestro administrador de contraseñas sincroniza tus credenciales de forma segura entre todos tus dispositivos. Ya sea que estés en tu computadora, tableta o teléfono, siempre tendrás acceso a tus contraseñas.</p>

                <h3> ¿Listo para Simplificar tu Vida Digital?</h3>
                <p>No pierdas más tiempo creando contraseñas manualmente o arriesgándote con contraseñas débiles. <b>Con nuestro generador de contraseñas, puedes: </b></p>
                <p>Proteger todas tus cuentas con <b>contraseñas únicas y seguras</b>. </p>
                <p><b>Ahorrar tiempo </b> al dejar que nuestra herramienta haga el trabajo por ti.</p>
                <p><b>Mantener el control</b> sobre tu seguridad en línea.</p>
            </div>
        </div>

)}

