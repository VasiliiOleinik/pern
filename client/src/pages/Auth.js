import React from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Email..." />
                    <Form.Control className="mt-3" placeholder="Password..." />
                    {isLogin
                        ? <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>Don`t have an accaunt? <NavLink to={REGISTRATION_ROUTE}>Register now !</NavLink></div>
                            <Button variant="primary" className="mt-3">Login</Button>
                        </Row>
                        : <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>Have an accaunt? <NavLink to={LOGIN_ROUTE}>Login now !</NavLink></div>
                            <Button variant="primary" className="mt-3">Register me</Button>
                        </Row>
                    }

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;