import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]);

  const loadApi = () => {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p>{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
