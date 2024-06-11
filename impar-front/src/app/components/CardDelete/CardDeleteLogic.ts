import MyContext from "@/app/context/contextProvider";
import { deleteItem } from "@/app/services/api";
import Icard from "@/app/types/Icard";
import { useContext, useRef } from "react";
const CardDeleteLogic = (): any => {
    const deleteBackground = useRef<HTMLInputElement | null>(null);
    const context = useContext(MyContext)
    const closeCard = () => {
        if (!context?.loading) {
            context?.setModalDelete(false);
            context?.setItemToDelete(-1);
        }
    }

    const onclickOutside = (ele: HTMLInputElement | any) => {
        const className = ele.target.className;
        if (className.includes("background")) {
            closeCard()
        }
    }

    const deleteItemId = async () => {
        context?.setloading(true);
        if (context?.ItemToDelete && !context.loading) {
            deleteItem(context?.ItemToDelete).then((data) => {
                console.log(`Item: ${context?.ItemToDelete} was removed!`);
                const newArray: any = context?.cards?.filter((item: Icard) => item.Id !== context?.ItemToDelete)
                context?.setCards(newArray)
                closeCard();
                context?.setloading(false);
            }).catch((error) => {
                console.error(error);
            });

        }
    }

    return {
        closeCard,
        onclickOutside,
        deleteBackground,
        deleteItemId
    }
}
export default CardDeleteLogic;