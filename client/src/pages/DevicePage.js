import React from 'react';
import { Card, Col, Container, Image, Row, Button, Table } from 'react-bootstrap';

const DevicePage = () => {
    const device = { id: 1, name: "Iphone 12", price: 25000, rating: 5, img: '123' };
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 gb' },
        { id: 2, title: 'Камера', description: '5 gb' },
        { id: 3, title: 'Прооцессор', description: '5 gb' },
        { id: 4, title: 'Кол-во ядер', description: '5 gb' },
        { id: 5, title: 'Аккумулятор', description: '5 gb' },
    ];

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justift-content-center">
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ fontSize: 32 }}
                    >
                        <h3>{device.price}</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <h3 className="mt-3">Характеристики</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Option</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {description.map(info =>
                        <tr key={info.id}>
                            <td>{info.id}</td>
                            <td>{info.title}</td>
                            <td>{info.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default DevicePage;