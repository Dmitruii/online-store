import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/DeviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data.types))
        fetchBrands().then(data => device.setBrands(data.brands))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = num => {
        setInfo(info.filter(i => i.number === num ? false : true))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value}: i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (<Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add brand
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className='my-2'>
                    <Dropdown.Toggle>Type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='my-2'>
                    <Dropdown.Toggle>Brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control placeholder='device name'  className='mt-2'
                              value={name} onChange={e => setName(e.target.value)}/>
                <Form.Control placeholder='price' className='mt-2' type='number'
                              value={price} onChange={e => setPrice(e.target.value)}/>
                <Form.Control placeholder='photo' className='mt-2'
                              type='file' onChange={selectFile}/>
                <hr />
                <Button variant='outline-dark' onClick={addInfo}>Add specification</Button>
                {
                    info.map(i =>
                        <Row className='mt-2' key={i.number}>
                            <Col md={4}>
                              <Form.Control placeholder='title' value={i.title}
                                            onChange={e => changeInfo('title', e.target.value, i.number)}/>
                            </Col>
                            <Col md={4}>
                              <Form.Control placeholder='description' value={i.description}
                                            onChange={e => changeInfo('description', e.target.value, i.number)}/>
                            </Col>
                            <Col md={4}>
                                <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Remove</Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={addDevice}>Add</Button>
        </Modal.Footer>
    </Modal>)
});


export default CreateDevice;