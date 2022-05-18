import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return <Row className={'d-flex'}>
            {device.brands.map(brand => (
                <Card key={brand.id} className={'p-2 m-1'} onClick={() => device.setSelectedBrand(brand.id)}
                      style={{width: 'auto', cursor: 'pointer'}} text={'white'}
                      bg={brand.id === device.selectedBrand ? 'success' : 'primary'}>
                    {brand.name}
                </Card>
            ))}
        </Row>
})

export default BrandBar