import React, { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import './Main.css';
import './global.css';
import './Sidebar.css';

function App() {
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );

    loadDevs();
  }, []);

  async function loadDevs() {
    const response = await api.get('/devs');
    setDevs(response.data);
  }

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      techs,
      latitude,
      longitude,
      github_username,
    });

    setGithub_username('');
    setTechs('');
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">SALVAR</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(item => (
            <li key={item._id} className="dev-item">
              <header>
                <img src={item.avatar_url} alt={item.name} />
                <div className="user-info">
                  <strong>{item.name}</strong>
                  <span>{item.techs.join(', ')}</span>
                </div>
              </header>
              <p>{item.bio}</p>
              <a href={`https://github.com/${item.github_username}`}>
                Acessar perfil no GitHub
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
