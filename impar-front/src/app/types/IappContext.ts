import { Dispatch, SetStateAction } from 'react';
import Icard from './Icard';

export interface IappContext {
    panelPosition: boolean;
    setPanelPosition: Dispatch<SetStateAction<boolean>>;
    modalDelete: boolean;
    setModalDelete: Dispatch<SetStateAction<boolean>>;
    ItemToDelete: number;
    setItemToDelete: Dispatch<SetStateAction<number>>;
    selectedCard: Icard | undefined;
    setSelectedCard: Dispatch<SetStateAction<Icard | undefined>>;
    cards: Array<Icard> | undefined;
    setCards: Dispatch<SetStateAction<Array<Icard>>>;
    Filename: string | undefined;
    setFilename: Dispatch<SetStateAction<string>>;

}
