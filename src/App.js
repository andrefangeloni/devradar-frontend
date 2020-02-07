import React, { useEffect, useState } from 'react';
import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './App.css';
import './Main.css';
import './global.css';
import './Sidebar.css';

const App = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    loadDevs();
  }, []);

  const loadDevs = async () => {
    const response = await api.get('/devs');
    setDevs(response.data);
  };

  const handleAddDev = async data => {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(item => (
            <DevItem key={item._id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
