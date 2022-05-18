import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/DeviceApi";

const CreateType = ({show, onHide}) => {
    const [type, setType] = useState('')

    const addType = () => {
        createType(type).then(() => {
            setType('')
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
                Add type
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder='type name' value={type}
                              onChange={e => setType(e.target.value)}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Close</Button>
            <Button variant='outline-success' onClick={addType}>Add</Button>
        </Modal.Footer>
    </Modal>)
};

export default CreateType