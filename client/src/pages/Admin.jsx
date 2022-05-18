import React, {useState} from 'react'
import {Button, Container, Row} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container>
            <Row  className={'my-2'}>
                <Button variant={'primary'} onClick={() => setTypeVisible(true)}>
                    Add type
                </Button>
            </Row>
            <Row  className={'my-2'}>
                <Button variant={'primary'} onClick={() => setBrandVisible(true)}>
                    Add brand
                </Button>
            </Row>
            <Row  className={'my-2'}>
                <Button variant={'primary'} onClick={() => setDeviceVisible(true)}>
                    Add device
                </Button>
            </Row>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    )
}

export default Admin