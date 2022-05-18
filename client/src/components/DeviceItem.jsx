import React from 'react'
import {Button, Card, Col, Image} from "react-bootstrap";
import star from './../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)} className={'mt-3'}>
            <Card style={{width: 200, cursor: 'pointer'}} border={'light'}>
                <Image src={'http://localhost:4567/' + device.img} height={150} style={{objectFit: "contain"}}/>
                <div className={'mt-1 d-flex justify-content-between align-items-center'}>
                    <div className={'text-black-50'}>Iphone</div>
                    <div className={'d-flex'}>
                        <div>{device.rating}</div>
                        <Image src={star} width={20} height={20}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
}

export default DeviceItem