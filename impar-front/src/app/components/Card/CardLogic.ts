import MyContext from "@/app/context/contextProvider";
import { useState, useContext } from "react";
const CardLogic = (): any => {
    const context = useContext(MyContext);

    const openDeleteCard = (id: number) => {
        context?.setItemToDelete(id);
        context?.setModalDelete(true);
    }
    const openEditCard = (imgUrl: string, status: string, id: number, name: string) => {
        context?.setPanelPosition(true)
    }

    return {
        openDeleteCard,
        openEditCard
    }
}
export default CardLogic;