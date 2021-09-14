import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row>
            <Col md={12} className="d-flex">
                {device.brands.map(brand =>
                    <Card
                        key={brand.id}
                        className="p-3"
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'black'}
                        style={{ cursor: 'pointer' }}
                    >
                        {brand.name}
                    </Card>
                )}
            </Col>
        </Row>
    );
});

export default BrandBar;