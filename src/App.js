import React, { useState, useEffect } from 'react';

function App() {
  const [tecnoloigas, SetTecnoloigas] = useState([]);

  const [newTch, setNewTch] = useState('');

  function hadleAdd() {
    SetTecnoloigas([...tecnoloigas, newTch]);
    setNewTch('');
  }

  useEffect(() => {
    const getTechs = localStorage.getItem('tech');

    if (getTechs) {
      SetTecnoloigas(JSON.parse(getTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tecnoloigas));
  }, [tecnoloigas]);

  return (
    <>
      <ul>
        {tecnoloigas.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <input value={newTch} onChange={e => setNewTch(e.target.value)} />

      <button type="button" onClick={hadleAdd}>
        Adiciona
      </button>
    </>
  );
}

export default App;
