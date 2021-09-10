import React, { useContext } from 'react';
import UserStore from '../store/UserStore';
import { Navbar, Nav, Form, FormControl, Button, Container, InputGroup, ButtonGroup } from 'react-bootstrap';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const Navigation = observer(() => {
    const { user } = useContext(Context);

    const { i18n, t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    function changeLang(lang) {
        localStorage.setItem('language', lang);
        changeLanguage(lang);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='text-white'>GoodSHOP</NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto text-white">
                        <Button variant="outline-light"> {t("AdminPanel")}</Button>
                        <Button variant="outline-light" className="ml-4"> {t("Logout")}</Button>
                    </Nav>
                    : <Nav className="ml-auto text-white">
                        <Button variant="outline-light" onClick={() => user.setIsAuth(true)}> {t("Auth")}</Button>
                    </Nav>
                }
                <ButtonGroup className="ml-4" size="sm">
                    <Button variant="secondary" onClick={() => changeLang("en")} active={i18n.language === "en"&& true}>EN</Button>
                    <Button variant="secondary" onClick={() => changeLang("ru")} active={i18n.language === "ru"&& true}>RU</Button>
                </ButtonGroup>
            </Container>


            {/* <Form className="d-flex">
                    <InputGroup>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Search</Button>
                    </InputGroup>
                </Form> */}
        </Navbar>
    );
});

export default Navigation;