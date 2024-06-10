import { Dispatch, SetStateAction } from 'react';
import Icard from './Icard';

export interface IappContext {
    panelPosition: boolean;
    setPanelPosition: Dispatch<SetStateAction<boolean>>;
    modalDelete: boolean;
    setModalDelete: Dispatch<SetStateAction<boolean>>;
    ItemToDelete: number | undefined;
    setItemToDelete: Dispatch<SetStateAction<number | undefined>>;
    selectedCard: Icard | undefined;
    setSelectedCard: Dispatch<SetStateAction<Icard | undefined>>;
}
