import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    }
    const removeInfo = number => {
        setInfo(info.filter(i => i.number !== number));
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col md={6}>
                            <Form.Group controlId="typeControlSelect">
                                <Form.Label>Выберите тип</Form.Label>
                                <Form.Control as="select">
                                    {device.types.map(type =>
                                        <option key={type.id}>{type.name}</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="typeControlSelect">
                                <Form.Label>Выберите брэнд</Form.Label>
                                <Form.Control as="select">
                                    {device.brands.map(brand =>
                                        <option key={brand.id}>{brand.name}</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Control placeholder="Название устройства" className="mt-2" />
                    <Form.Control placeholder="Стоимость устройства" className="mt-2" />
                    <Form.Control className="mt-2" type="file" />
                    <hr></hr>
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number} >
                            <Col md={4}>
                                <Form.Control placeholder="Введите название устройства" />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Введите описание устройства" />
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-dark" onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;