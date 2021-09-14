import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import { useTranslation } from "react-i18next";
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';

const Shop = observer(() => {
    const { t } = useTranslation();
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows))
    }, []);

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;