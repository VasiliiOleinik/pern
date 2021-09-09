import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import { useTranslation } from "react-i18next";

const Shop = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;