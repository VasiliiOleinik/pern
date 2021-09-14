import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Image, Row, Button, Table } from 'react-bootstrap';
import { fetchOneDevices } from '../http/deviceApi';

const DevicePage = () => {
   const [device, setDevice] = useState({info: []});
    const {id} = useParams();
   useEffect(() => {
    fetchOneDevices(id).then(data => setDevice(data));
   }, []);  

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_KEY + device.img} />
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
                    {device.info.map(info =>
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