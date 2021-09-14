import React, { useContext, useState } from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useTranslation } from "react-i18next";
import { registration, login } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);;
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? t("Login") : t("Register")}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder={t("Email")}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={t("Password")}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {isLogin
                        ? <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>{t("DontHaveAcc")} <NavLink to={REGISTRATION_ROUTE}> {t("RegisterNow")}</NavLink></div>
                            <Button variant="primary" className="mt-3" onClick={signIn}>{t("Login")}</Button>
                        </Row>
                        : <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
                            <div>{t("HaveAcc")} <NavLink to={LOGIN_ROUTE}> {t("LoginNow")}</NavLink></div>
                            <Button variant="primary" className="mt-3" onClick={signIn}>{t("RegisterMe")}</Button>
                        </Row>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;