import React from 'react';

import './App.css';
import './Main.css';
import './global.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">SALVAR</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/51930261?s=460&v=4" alt="André Angeloni"/>
              <div className="user-info">
                <strong>André Angeloni</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Biografia do usuário</p>
            <a href="https://github.com/andrefangeloni">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/51930261?s=460&v=4" alt="André Angeloni"/>
              <div className="user-info">
                <strong>André Angeloni</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Biografia do usuário</p>
            <a href="https://github.com/andrefangeloni">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/51930261?s=460&v=4" alt="André Angeloni"/>
              <div className="user-info">
                <strong>André Angeloni</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Biografia do usuário</p>
            <a href="https://github.com/andrefangeloni">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/51930261?s=460&v=4" alt="André Angeloni"/>
              <div className="user-info">
                <strong>André Angeloni</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Biografia do usuário</p>
            <a href="https://github.com/andrefangeloni">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
