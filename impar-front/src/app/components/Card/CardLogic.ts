import MyContext from "@/app/context/contextProvider";
import {  useContext } from "react";
import PanelLogic from "./../Slider/PanelLogic";

const CardLogic = (): any => {
    const context = useContext(MyContext);


    const openDeleteCard = (Id: number) => {
        context?.setItemToDelete(Id);
        context?.setModalDelete(true);
    }
    const openEditCard = (ImgUrl: string, Status: string, Id: number, Name: string, imgId: number) => {
        const showShowNameLabel = Status.length <= 30 ? Status : Status.substring(0, 22) + '...' + Status.slice(-5);
        context?.setSelectedCard({ ImgUrl: ImgUrl, Status: Status, Id: Id, Name: Name, IdImg: imgId })
        context?.setFilename(showShowNameLabel)
        
        context?.setPanelPosition(true)
    }

    return {
        openDeleteCard,
        openEditCard
    }
}
export default CardLogic;