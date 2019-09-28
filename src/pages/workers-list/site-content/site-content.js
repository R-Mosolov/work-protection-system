import React from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Table
} from "reactstrap";
import Employee from "./img/employee.svg";

const SiteContent = () => {
  return (
    <div className="workers-list d-flex justify-content-around">
      <div className="d-flex justify-content-center align-items-center ml-5">
        <img src={Employee} alt="Изображение команды" style={{height: 450, width: 450}}/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
          <Col xs="12" lg="10">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"/> Таблица сотрудников
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th className="align-middle text-center">ФИО сотрудника</th>
                    <th className="align-middle text-center">Отдел</th>
                    <th className="align-middle text-center">Должность</th>
                    <th className="align-middle text-center">Состояние</th>
                    <th className="align-middle text-center">ID устройства</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="p-0 m-0 align-middle">
                      <Link className="nav-link" to="/worker">Анна Павлова</Link>
                    </td>
                    <td>Отдел кадров</td>
                    <td>HR-специалист</td>
                    <td>
                      <Badge color="success">Работоспособен</Badge>
                    </td>
                    <td>ХХХ-ХХХ</td>
                  </tr>
                  <tr>
                    <td className="p-0 m-0 align-middle">
                      <Link className="nav-link" to="/worker">Анатолий Ветров</Link>
                    </td>
                    <td>Отдел релокации</td>
                    <td>Менеджер</td>
                    <td>
                      <Badge color="danger">Тревога</Badge>
                    </td>
                    <td>ХХХ-ХХХ</td>
                  </tr>
                  <tr>
                    <td className="p-0 m-0 align-middle">
                      <Link className="nav-link" to="/worker">Илья Самойлов</Link>
                    </td>
                    <td>Главный цех</td>
                    <td>Фрезировщик</td>
                    <td>
                      <Badge color="secondary">Недоступен</Badge>
                    </td>
                    <td>ХХХ-ХХХ</td>
                  </tr>
                  <tr>
                    <td className="p-0 m-0 align-middle">
                      <Link className="nav-link" to="/worker">Екатерина Борисова</Link>
                    </td>
                    <td>Бухгалтерия</td>
                    <td>Бухгалтер</td>
                    <td>
                      <Badge color="danger">Тревога</Badge>
                    </td>
                    <td>ХХХ-ХХХ</td>
                  </tr>
                  <tr>
                    <td className="p-0 m-0 align-middle">
                      <Link className="nav-link" to="/worker">Жанна Ибрагимова</Link>
                    </td>
                    <td>Отдел питания</td>
                    <td>Повар</td>
                    <td>
                      <Badge color="success">Работоспособен</Badge>
                    </td>
                    <td>ХХХ-ХХХ</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
      </div>
    </div>
  );
};

export default SiteContent;
