import React from 'react';

import './css/desktop.css';
import WorkerImage from './img/engineer.svg';

const SiteContent = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={WorkerImage} className="card-img" alt="Фото сотрудника"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Иванов Иван Иванович</h5>
              <p className="card-text">Руководитель отдела инженеров в филиале г. Казань компании "Russian Company"</p>
              <p className="card-text"><small className="text-muted">Последнее обновление данных</small></p>

              {/*<h5>Состояние работника</h5>*/}
              {/*<p className="card-text">Уровень трезвости: нормальный</p>*/}
              {/*<p className="card-text">Удовлетворенность коллективом: нормальный</p>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
