import { createContext } from 'react';
import { IappContext } from '../types/IappContext';
const MyContext = createContext<IappContext | undefined>(undefined);
export default MyContext