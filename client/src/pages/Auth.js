import React from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useTranslation } from "react-i18next";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const { t } = useTranslation();

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? t("Login") : t("Register")}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder={t("Email")} />
                    <Form.Control className="mt-3" placeholder={t("Password")} />
                    {isLogin
                        ? <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>{t("DontHaveAcc")} <NavLink to={REGISTRATION_ROUTE}> {t("RegisterNow")}</NavLink></div>
                            <Button variant="primary" className="mt-3">{t("Login")}</Button>
                        </Row>
                        : <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>{t("HaveAcc")} <NavLink to={LOGIN_ROUTE}> {t("LoginNow")}</NavLink></div>
                            <Button variant="primary" className="mt-3">{t("RegisterMe")}</Button>
                        </Row>
                    }
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;