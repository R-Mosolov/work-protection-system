import React from 'react';

import './css/desktop.css';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Table
} from "reactstrap";

const SiteContent = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center">
        <Col xs="12" lg="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"/> Таблица предприятий
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th className="align-middle text-center">Название предприятия</th>
                  <th className="align-middle text-center">Головной офис</th>
                  <th className="align-middle text-center">Количество филиалов</th>
                  <th className="align-middle text-center">Численность сотрудников</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>ТатТехСбыт</td>
                  <td>Москва</td>
                  <td className="text-center">23</td>
                  <td className="text-center">1200</td>
                </tr>
                <tr>
                  <td>РосОкнСтрой</td>
                  <td>Санкт-Петербург</td>
                  <td className="text-center">14</td>
                  <td className="text-center">750</td>
                </tr>
                <tr>
                  <td>Братья Ибрагимовы</td>
                  <td>Кросноярск</td>
                  <td className="text-center">2</td>
                  <td className="text-center">300</td>
                </tr>
                <tr>
                  <td>ИнформСтрой</td>
                  <td>Челябинск</td>
                  <td className="text-center">2</td>
                  <td className="text-center">15</td>
                </tr>
                <tr>
                  <td>ITL-Company</td>
                  <td>Калифорния</td>
                  <td className="text-center">1</td>
                  <td className="text-center">7</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
    </div>
  );
};

export default SiteContent;
