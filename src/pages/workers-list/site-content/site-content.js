import React from 'react';

import './css/desktop.css';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from "reactstrap";

const SiteContent = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center">
        <Col xs="12" lg="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Таблица сотрудников
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>ФИО сотрудника</th>
                  <th>Отдел</th>
                  <th>Должность</th>
                  <th>Состояние</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Анна Павлова</td>
                  <td>Отдел кадров</td>
                  <td>HR-специалист</td>
                  <td>
                    <Badge color="success">Работоспособен</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Анатолий Ветров</td>
                  <td>Отдел релокации</td>
                  <td>Менеджер</td>
                  <td>
                    <Badge color="danger">Болеет</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Илья Самойлов</td>
                  <td>Главный цех</td>
                  <td>Фрезировщик</td>
                  <td>
                    <Badge color="secondary">Недоступен</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Екатерина Борисова</td>
                  <td>Бухгалтерия</td>
                  <td>Бухгалтер</td>
                  <td>
                    <Badge color="warning">Имеет увечье</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Жанна Ибрагимова</td>
                  <td>Отдел питания</td>
                  <td>Повар</td>
                  <td>
                    <Badge color="success">Работоспособен</Badge>
                  </td>
                </tr>
                </tbody>
              </Table>
              <Pagination>
                <PaginationItem>
                  <PaginationLink previous tag="button"></PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next tag="button"></PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Col>
    </div>
  );
};

export default SiteContent;
