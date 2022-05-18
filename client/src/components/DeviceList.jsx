import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import Pages from "./Pages";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return <><Row className={'d-flex'}>
        {device.devices.map(device => <DeviceItem key={device.id} device={device}/>)}
    </Row>
        <Row className='my-5'>
            <Pages />
        </Row>
    </>
})

export default DeviceList