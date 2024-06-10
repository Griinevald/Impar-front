import MyContext from "@/app/context/contextProvider";
import { useContext, useRef } from "react";
const CardDeleteLogic = (): any => {
    const deleteBackground = useRef<HTMLInputElement | null>(null);
    const context = useContext(MyContext)
    const closeCard = () => {
        context?.setModalDelete(false);
        context?.setItemToDelete(undefined);

    }

    const onclickOutside = (ele: HTMLInputElement | any) => {
        const className = ele.target.className;
        if (className.includes("background")) {
            closeCard()
        }
    }
    return {
        closeCard,
        onclickOutside,
        deleteBackground
    }
}
export default CardDeleteLogic;