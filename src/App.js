import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
    const [nutri, setNutri] = useState([]);

    useEffect(()=> {

      function loadApi() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r)=> r.json())
        .then((json)=> {
          console.log(json);
          setNutri(json);
        })
        .catch(()=> {
          console.log(`Ops Algo deu Errado`);
        })
      }

      loadApi();

    }, [])


  return(
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=> {
        return (
          <article className='posts' key={item.id}>
            <strong className='titulo'>{item.titulo}</strong>
            <img className='imagemCapa' src={item.capa} alt={item.titulo} />
            <p className='textoApi'>{item.subtitulo}</p>
            <a href='https://github.com/jlmsdev'  className='btnAcessar'>Acessar</a>
          </article>
        );
      })}

    </div>
  );
}

export default App;