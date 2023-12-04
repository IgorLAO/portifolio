import './App.scss';

import NavBar from '../../components/navBar';

import star from '../../assets/images/start.svg'

export default function App() {

  return (
    <div className="App" id='bc'>
      <NavBar />
      <section className='s1'>
        <div>
          <h1>
            Full-
            stack
            Developer 
          </h1>
        </div>

        <div className='starBlock' style={{ display: 'flex' }}>
          <img src={star} alt='a' id='imgStart' onMouseEnter={() => {
           let elemento = document.getElementById('xpand').style
           elemento.backgroundColor = '#fff'
           elemento.width = '100%'
           elemento.height = '100%'

          }} 
          onMouseOut={() => {
            let elemento = document.getElementById('xpand').style
           elemento.backgroundColor = '#000'
           elemento.width = '0%'
           elemento.height = '0%'
            
          }} 
          />
          <div id='xpand' style={{position: 'fixed',transition: 'all 0.2s ease-in-out'}}>
            a
          </div>
          <h4>
            Sou um aspirante a desenvolvedor Brasileiro  com muita sede de conhecimento
            E ama o que faz.
          </h4>
          <div className='btnContact'>
            <h2>
              ENTRE EM CONTATO
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
