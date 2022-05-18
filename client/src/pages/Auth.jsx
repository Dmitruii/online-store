import React, {useContext, useState} from 'react'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
       try {
           let date;
           if(isLogin) {
               console.log('login')
               date = await login(email, password)
               console.log(date)
           } else {
               console.log('registration')
               date = await registration(email, password)
               console.log(date)
           }
           user.setUser(user)
           user.setIsAuth(true)
           navigate(SHOP_ROUTE)
       } catch (e) {
           console.log(e)
       }
    }

    return <Container className={'d-flex justify-content-center align-items-center'}
                       style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className='p-5'>
            <h2 className='m-auto'>{isLogin ? 'Sign in' :  'Sign up'}</h2>
            <Form className={'d-flex flex-column'}>
                <Form.Control placeholder={'email'}
                              value={email} onChange={e => setEmail(e.target.value)}
                              className='mt-4' type={'email'}/>
                <Form.Control placeholder={'password'} type={'password'}
                              value={password} onChange={e => setPassword(e.target.value)}
                              className='mt-3'/>
                <Row className='d-flex justify-content-between mt-4 flex-nowrap '>
                    <p className={'w-auto'}>
                        {isLogin ? 'No account? ' : 'Have account? '}
                        <NavLink to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                            {isLogin ? 'Sign up' :  'Sign in'}
                        </NavLink>
                    </p>
                    <Button variant={'outline-success'} className='align-self-end w-auto'
                        onClick={click}>
                        {isLogin ? 'Sign in' : 'Sign up'}
                    </Button>
                </Row>
            </Form>
        </Card>
    </Container>
})

export default Auth