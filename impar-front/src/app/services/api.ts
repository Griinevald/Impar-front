import axios from 'axios';
import { ICar, ICarODataResponse } from '../types/apiRess';

const getWithFilter = (skip: number, top: number, item: string) => new Promise<ICarODataResponse>(async (resolve, reject) => {
    try {
        const response = await axios.get(`https://app-viniciusmatheus-api.azurewebsites.net//odata/CarOdata?${item ? `$filter=contains(tolower(Name), tolower('${item}'))&` : ''}$count=true&$skip=${skip}&$top=${top}&$expand=Photo&$orderby=Name`);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})

const addItem = (item: ICar) => new Promise<ICar>(async (resolve, reject) => {
    try {
        const response = await axios.post("https://app-viniciusmatheus-api.azurewebsites.net//api/Car", item);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
const deleteItem = (item: number) => new Promise<ICarODataResponse>(async (resolve, reject) => {
    try {
        const response = await axios.delete(`https://app-viniciusmatheus-api.azurewebsites.net//api/Car/${item}`);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
const updateItemId = (id: number, item: ICar) => new Promise<ICar>(async (resolve, reject) => {
    try {
        const response = await axios.put(`https://app-viniciusmatheus-api.azurewebsites.net//api/Car/${id}`, item);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
    ;

export {  addItem, deleteItem, updateItemId, getWithFilter };
