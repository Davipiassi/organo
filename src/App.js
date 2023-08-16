import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Time from './components/Time';

import { useState } from 'react';

function App() {

  const categorias = [
    {
      nome: 'Front-End',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Back-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Banco de Dados',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        categorias={categorias.map(categoria => categoria.nome)}
        aoCadastrarColaborador={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {categorias.map(categoria => 
        <Time 
          key={categoria.nome} 
          nome={categoria.nome} 
          corPrimaria={categoria.corPrimaria} 
          corSecundaria={categoria.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.categoria === categoria.nome)}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
