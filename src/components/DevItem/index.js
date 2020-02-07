import React from 'react';

import './styles.css';

const DevItem = ({ item }) => (
  <li className="dev-item">
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
);

export default DevItem;
