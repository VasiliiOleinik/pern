import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);


    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    }
    const removeInfo = number => {
        setInfo(info.filter(i => i.number !== number));
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const addDevice = () => {
        console.log(device.selectedBrand)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand);
        formData.append('typeId', device.selectedType);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => onHide());
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
                                <Form.Control
                                    as="select"
                                    onChange={e => device.setSelectedType(e.target.value)}
                                >
                                    {device.types.map(type =>
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="typeControlSelect">
                                <Form.Label>Выберите брэнд</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={e => device.setSelectedBrand(e.target.value)}
                                >
                                    {device.brands.map(brand =>
                                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Control
                        placeholder="Название устройства"
                        className="mt-2"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        placeholder="Стоимость устройства"
                        className="mt-2"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control className="mt-2" type="file" onChange={selectFile} />
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
                                <Form.Control
                                    placeholder="Введите название устройства"
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите описание устройства"
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-dark" onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addDevice} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;