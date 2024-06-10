import MyContext from "@/app/context/contextProvider";
import {  useContext } from "react";
import PanelLogic from "./../Slider/PanelLogic";

const CardLogic = (): any => {
    const context = useContext(MyContext);


    const openDeleteCard = (id: number) => {
        context?.setItemToDelete(id);
        context?.setModalDelete(true);
    }
    const openEditCard = (imgUrl: string, status: string, id: number, name: string, imgId: number) => {
        context?.setSelectedCard({ imgUrl: imgUrl, status: status, id: id, name: name, idImg: imgId })
        context?.setFilename(status)
        debugger
        context?.setPanelPosition(true)
    }

    return {
        openDeleteCard,
        openEditCard
    }
}
export default CardLogic;