import axios from 'axios';
import { ICar, ICarODataResponse } from '../types/apiRess';

const getAll = new Promise<ICarODataResponse>(async (resolve, reject) => {
    try {
        const response = await axios.get("http://localhost:5032/api/Car");
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
});
const getWithFilter = (skip: number, top: number, item: string) => new Promise<ICarODataResponse>(async (resolve, reject) => {
    try {
        const response = await axios.get(`http://localhost:5032/odata/CarOdata?${item ? `$filter=contains(tolower(Name), tolower('${item}'))&` : ''}$count=true&$skip=${skip}&$top=${top}&$expand=Photo&$orderby=Name`);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})

const addItem = (item: ICar) => new Promise<ICar>(async (resolve, reject) => {
    try {
        const response = await axios.post("http://localhost:5032/api/Car", item);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
const deleteItem = (item: number) => new Promise<ICarODataResponse>(async (resolve, reject) => {
    try {
        const response = await axios.delete(`http://localhost:5032/api/Car/${item}`);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
const updateItemId = (id: number, item: ICar) => new Promise<ICar>(async (resolve, reject) => {
    try {
        const response = await axios.put(`http://localhost:5032/api/Car/${id}`, item);
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
})
    ;

export { getAll, addItem, deleteItem, updateItemId, getWithFilter };
