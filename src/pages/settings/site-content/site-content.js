import React from 'react';

import './css/style.css';
import Configurator from './img/configuration.svg';

const SiteContent = () => {
  return (
    <div className="settings d-flex">
      <div className="d-flex justify-content-center align-items-center w-50">
          <img src={Configurator} alt="Изображение конфигуратора" style={{height: 450, width: 450}}/>
      </div>
      <div className="container__position d-flex justify-content-center align-items-center">
        <div className="layout-positioner">
          <form className="px-4 py-3">
            <h1 className="title text-center mb-4">Настройки по умолчанию</h1>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Мин. пульс работника</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="60"/>
              <div className="input-group-append">
                  <span className="input-group-text">уд./сек.</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Макс. пульс работника</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="90"/>
              <div className="input-group-append">
                  <span className="input-group-text">уд./сек.</span>
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Мин. температура помещения</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="20"/>
                  <div className="input-group-append">
                      <span className="input-group-text">°C</span>
                  </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Маск. температура помещения</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="35"/>
              <div className="input-group-append">
                  <span className="input-group-text">°C</span>
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Мин. влажность воздуха</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="20"/>
              <div className="input-group-append">
                  <span className="input-group-text">%</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Макс. влажность воздуха</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="30"/>
              <div className="input-group-append">
                  <span className="input-group-text">%</span>
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Яркость освещения</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="20"/>
              <div className="input-group-append">
                  <span className="input-group-text">Вт</span>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text">Норма углекислого газа</span>
              </div>
              <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="1 000"/>
              <div className="input-group-append">
                  <span className="input-group-text">ppm</span>
              </div>
            </div>
            <button className="btn btn-warning btn-block">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
