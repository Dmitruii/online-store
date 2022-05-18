import React, {useContext} from 'react'
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    user.setIsAuth(true)

    return <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Link to={'/'} style={{color: '#fff', textDecoration: 'none', fontSize: '1.5rem'}}>SHOP</Link>
            {user.isAuth ? <Nav className="ml-auto" style={{maxHeight: '100px'}} navbarScroll>
                <Button variant={'outline-light'} className={'mx-3'}
                        onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
                <Button variant={'outline-success'}
                        onClick={() => logOut}>Sign out</Button>
            </Nav> : <Nav className="ml-auto" style={{maxHeight: '100px'}} navbarScroll>
                <Button className={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Sign up</Button>
            </Nav>}
        </Container>
    </Navbar>
})

export default NavBar