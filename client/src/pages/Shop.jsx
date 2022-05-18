import React, {useContext, useEffect} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/DeviceApi";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data.types))
        fetchBrands().then(data => device.setBrands(data.brands))
        fetchDevices(null, null, 1, 3).then(data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return <Container className={'mt-3'}>
        <Row>
            <Col md={3}>
                <TypeBar />
            </Col>
            <Col md={9}>
                <BrandBar />
                <DeviceList />
            </Col>
        </Row>
    </Container>
})

export default Shop