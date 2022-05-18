import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import bigStart from './../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchDevice} from "../http/DeviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchDevice(id).then(data => setDevice(data.device))
    }, [])

    return (
        <Container>
            <Row className={'mt-5'}>
                <Col md={4}>
                    <img width={300} height={300} src={'http://localhost:4567/'+ device.img} alt={'img'}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                             style={{ background: `url(${bigStart}) no-repeat center center`,
                                 width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '3px solid #ccc'}}>
                        <h3>{device.price}</h3>
                        <Button variant='outline-dark'>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column mt-5'}>
                <h1>specifications</h1>
                {device.info.map(info => (
                    <Row key={info.id} className={'p-2 fs-2 my-1 text-white'}
                         style={{background: '#333'}}>
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}

export default DevicePage