import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <Container className="d-flex flex-column">
            <Button
                variant="outline-dark"
                className="mt-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <Button
                variant="outline-dark"
                className="mt-2"
            >
                Добавить перевод
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    );
};

export default Admin;