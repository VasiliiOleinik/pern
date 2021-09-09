import React, { useContext } from 'react';
import UserStore from '../store/UserStore';
import { Navbar, Nav, Form, FormControl, Button, Container, InputGroup } from 'react-bootstrap';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";

const Navigation = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='text-white'>GoodSHOP</NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto text-white">
                        <Button variant="outline-light">Админ панель</Button>
                        <Button variant="outline-light" className="ml-4">Выйти</Button>
                    </Nav>
                    : <Nav className="ml-auto text-white">
                        <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
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