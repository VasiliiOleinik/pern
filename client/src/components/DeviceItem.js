import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const history = useHistory();
    return (
        <Col md={3}>
            <Card style={{ cursor: 'pointer' }} className="mt-3" onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
                <Image width="100%" height={150} src={process.env.REACT_APP_API_KEY + device.img} fluid />
                <div className="p-2">
                    <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                        <div>Samsung...</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>
                            <Image src='123' width={18} height={18} /> {/* Star img */}
                        </div>
                    </div>
                    <div>{device.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;