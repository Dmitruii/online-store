import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('type', {name: type})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('brand', {name: brand})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('brand')
    return data
}

export const fetchDevice = async (id) => {
    const {data} = await $authHost.get('device/' + id)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('device', device)
    return data
}