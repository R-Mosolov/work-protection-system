import React from 'react';

import './css/desktop.css';
import WorkerImage from './img/engineer.svg';

const SiteContent = () => {
  return (
    <div>
      <div className="login d-flex flex-column justify-content-center align-items-center">
        <div className="card mb-3" style={{maxWidth: '540px'}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={WorkerImage} className="card-img" alt="Фото сотрудника"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Иванов Иван Иванович</h5>
                <p className="card-text">Руководитель отдела инженеров в филиале г. Казань компании "Russian Company"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="place-title d-flex justify-content-start">
          <h5>Местоположение работника:</h5>
        </div>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae9a082ffbe204f5ae839c683e3c22939e7c962bebb089c7e6e0390cefb41701&amp;source=constructor"
            width="540"
            height="400"
            frameBorder="0"
            className="border rounded" />
      </div>
    </div>
  );
};

export default SiteContent;
