import axios from 'axios';
import { ICar } from '../types/apiRess';

const getAll = new Promise<Array<ICar>>(async (resolve, reject) => {
    try {
        const response = await axios.get("http://localhost:5032/api/Car?$filter=id eq 5");
        resolve(response.data);
    } catch (error) {
        reject(error);
    }
});

export { getAll };
