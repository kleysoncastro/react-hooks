import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tecnoloigas, SetTecnoloigas] = useState([]);

  const [newTch, setNewTch] = useState('');

  const hadleAdd = useCallback(() => {
    SetTecnoloigas([...tecnoloigas, newTch]);
    setNewTch('');
  }, [newTch, tecnoloigas]);

  useEffect(() => {
    const getTechs = localStorage.getItem('tech');

    if (getTechs) {
      SetTecnoloigas(JSON.parse(getTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tecnoloigas));
  }, [tecnoloigas]);

  const techsSize = useMemo(() => tecnoloigas.length, [tecnoloigas]);

  return (
    <>
      <ul>
        {tecnoloigas.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <strong> Voce tem {techsSize} salvas</strong>
      <br />

      <input value={newTch} onChange={e => setNewTch(e.target.value)} />

      <button type="button" onClick={hadleAdd}>
        Adiciona
      </button>
    </>
  );
}

export default App;
