import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, ButtonGroup } from 'react-bootstrap';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';

const Navigation = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const { i18n, t } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    function changeLang(lang) {
        localStorage.setItem('language', lang);
        changeLanguage(lang);
    }

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='text-white'>GoodSHOP</NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto text-white">
                        <Button
                            variant="outline-light"
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            {t("AdminPanel")}
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => logOut()}
                            className="ml-4"
                        >
                            {t("Logout")}
                        </Button>
                    </Nav>
                    : <Nav className="ml-auto text-white">
                        <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)}> {t("Auth")}</Button>
                    </Nav>
                }
                <ButtonGroup className="ml-4" size="sm">
                    <Button variant="secondary" onClick={() => changeLang("en")} active={i18n.language === "en" && true}>EN</Button>
                    <Button variant="secondary" onClick={() => changeLang("ru")} active={i18n.language === "ru" && true}>RU</Button>
                </ButtonGroup>
            </Container>
        </Navbar>
    );
});

export default Navigation;