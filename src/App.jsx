import './App.css'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import Galeria from './assets/Components/Card/Card'


const App = () => {
  return (
    <div>
      <Header name='Fundacion de adopción Adea' />

      <div className='container'>
        <div className='row'>

          <Galeria titulo='Negro' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/300' colorBack="success" colorFont='info'/>

          <Galeria titulo='Loki' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/169' colorBack="warning" colorFont='primary'/>

          <Galeria titulo='Puchungo' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/400' colorBack="danger" colorFont='success'/>

          <Galeria titulo='Moka' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/600' colorBack="secondary" colorFont='ligth'/>

          <Galeria titulo='Frida' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/900' colorBack="dark" colorFont='warning' />

          <Galeria titulo='Pepe' descripcion='No doptas una mascotas, adoptas un compañero' foto='https://placedog.net/758' colorBack="light" colorFont='dark' />

        </div>
      </div>
      <Footer />

    </div>
  )
}

export default App
