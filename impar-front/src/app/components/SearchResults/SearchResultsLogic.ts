import MyContext from "@/app/context/contextProvider"
import { getWithFilter } from "@/app/services/api";
import { useContext, useRef, useState } from "react"
import PanelLogic from "../../pageLogic";
import SearchLogic from "../SearchComponent/SearchLogic";


const SearchResultsLogic = () => {
    const { mountCards } = PanelLogic();
    const context = useContext(MyContext)
    const handleClick = () => {
        context?.setPanelPosition(!context?.panelPosition)
    }

    const loadMore = async () => {
        const top: number = 8;
        await getWithFilter(context!?.cards.length, top, context!?.searchValue).then((data) => {
            context?.setloading(false)
            const mountedCards = mountCards(data.value);
            if (data["@odata.count"]) {
                context?.setCount(data["@odata.count"])
            }
            context?.setCards(previus => [...previus, ...mountedCards])
            console.log(context?.cards)
        }).catch((error) => {
            console.error(error);
        });
    }

    return {
        handleClick,
        loadMore,
    }
}
export default SearchResultsLogic;