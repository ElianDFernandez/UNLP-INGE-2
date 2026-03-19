import './App.css'
import logoSyncro from './assets/logo-sin-fondo.png';

function App() {
  return (
    <div className="inicio-container">
      <div className="inicio-card-container">
        <div className="inicio-logo">
          <img src={logoSyncro} alt="Logo del Proyecto ING-2" />
          <h1>SYNCRO</h1>
        </div>
        <div className="inicio-titulo">
          <h3>Bienvenido al Proyecto ING-2</h3>
        </div>
        <div className="inicio-descripcion">
          <p>Este es el inicio del sistema. ¡Gracias por visitar!</p>
        </div>
        <div className="inicio-info-etapa">
          <small>
            <span role="img" aria-label="Construcción" style={{marginRight: '6px'}}>
              🚧
            </span>
            Actualmente nos encontramos en la etapa de documentación del proyecto.
          </small>
        </div>
      </div>
    </div>
  )
}

export default App
