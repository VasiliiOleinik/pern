import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="d-flex">
            {device.devices.length
                ? device.devices.map(device =>
                    <DeviceItem key={device.id} device={device} />
                )
                : <h5 className="ml-3 mt-3">Товары не найдены</h5>
            }
        </Row>
    );
});

export default DeviceList;