import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/DeviceApi";

const CreateBrand = ({show, onHide}) => {
    const [brand, setBrand] = useState('')

    const addBrand = () => {
        createBrand(brand).then(() => {
            setBrand('')
            onHide()
        }).catch(e => alert(e))
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
                <Form.Control placeholder='brand name' value={brand}
                              onChange={e => setBrand(e.target.value)}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={addBrand}>Add</Button>
        </Modal.Footer>
    </Modal>)
};

export default CreateBrand;