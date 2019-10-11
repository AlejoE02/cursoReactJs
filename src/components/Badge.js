import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://s.gravatar.com/avatar/8e28834ce066055f289d68d0324f1537?s=80" alt="Avatar" />
          <h1>
            Alejo <br /> Espitia
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>Engineer System</p>
          <p>@AlejoE02</p>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
