import React from 'react';

import './css/style.css';
import WorkerImage from './img/engineer.svg';
import HeartRate from './img/heart-rate.svg';
import Temperature from './img/temperature.svg';

const SiteContent = () => {
  return (
    <div>
      <div className="worker d-flex justify-content-around">
        <div className="pulse d-flex justify-content-center align-items-center">
          <div className="ml-5 position-fixed">
            <div className="d-flex flex-column">
              <img className="icon mb-5" src={HeartRate} alt="Пульс сердца" style={{width: 150, height: 150}}/>
              <p className="indicator__unit">
                <span className="indicator__number">75</span>
                <br/>уд./сек.
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="place-title d-flex justify-content-start">
            <h5 className="mt-4 mb-4">Информация о работнике</h5>
          </div>
          <div className="card mb-4" style={{maxWidth: '540px'}}>
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
            <h5 className="mt-2 mb-4">Местоположение работника</h5>
          </div>
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae9a082ffbe204f5ae839c683e3c22939e7c962bebb089c7e6e0390cefb41701&amp;source=constructor"
              width="540"
              height="400"
              frameBorder="0"
              className="border rounded" />
          <div className="mb-4">
            <h5 className="mt-4">История перемещений</h5>

            <p className="mt-3 mb-0"><b>Перемещение 1</b></p>
            <p className="mb-1"><b>Дата:</b> DD.MM.YYYY</p>
            <p className="mb-1"><b>Время:</b> HH:MM:SS</p>
            <p className="mb-1"><b>Местоположение:</b> ХХХ.ХХХ-YYY.YYYY</p>
            <p className="mb-1"><b>Длительность пребывания:</b> HH:MM:SS</p>

            <p className="mt-3 mb-0"><b>Перемещение 2</b></p>
            <p className="mb-1"><b>Дата:</b> DD.MM.YYYY</p>
            <p className="mb-1"><b>Время:</b> HH:MM:SS</p>
            <p className="mb-1"><b>Местоположение:</b> ХХХ.ХХХ-YYY.YYYY</p>
            <p className="mb-1"><b>Длительность пребывания:</b> HH:MM:SS</p>

            <p className="mt-3 mb-0"><b>Перемещение 3</b></p>
            <p className="mb-1"><b>Дата:</b> DD.MM.YYYY</p>
            <p className="mb-1"><b>Время:</b> HH:MM:SS</p>
            <p className="mb-1"><b>Местоположение:</b> ХХХ.ХХХ-YYY.YYYY</p>
            <p className="mb-1"><b>Длительность пребывания:</b> HH:MM:SS</p>
          </div>
        </div>
        <div className="temperature d-flex justify-content-center align-items-center">
          <div className="mr-5 position-fixed">
            <div className="d-flex flex-column">
              <img className="icon mb-5 d-flex" src={Temperature} alt="Пульс сердца" style={{width: 150, height: 150}}/>
              <p className="indicator__unit">
                <span className="indicator__number">36</span>
                <br/>°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
