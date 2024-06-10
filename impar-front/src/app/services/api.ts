import axios from 'axios';
import { ICar } from '../types/apiRess';

const getAll = new Promise<Array<ICar>>(async (resolve, reject) => {
    try {
        const response = await axios.get("http://localhost:5032/api/Car");
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
});
const getWithFilter = (item: string) => new Promise<Array<ICar>>(async (resolve, reject) => {
    try {
        const response = await axios.get(`http://localhost:5032/api/Car?$filter=contains(tolower(name), '${item.toLocaleLowerCase()}')`);
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
const deleteItem = (item: number) => new Promise<Array<ICar>>(async (resolve, reject) => {
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
