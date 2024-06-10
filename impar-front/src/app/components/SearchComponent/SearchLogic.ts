import { useContext, useState } from "react";
import pageLogic from './../../pageLogic'
import { getAll, getWithFilter } from "@/app/services/api";
import { ICar } from "@/app/types/apiRess";
import MyContext from "@/app/context/contextProvider";
const SearchLogic = () => {
    const { mountCards } = pageLogic();
    const [searchValue, setSearchValue] = useState("");
    const context = useContext(MyContext);
    const onKeyDown = (event: any) => {
        if (event.key == "Enter") {
            search()
        }
    }
   
    const search = async () => {
        if (searchValue.length > 0) {
            await getWithFilter(searchValue).then((data: Array<ICar>) => {
                debugger
                const filtredCards = mountCards(data);
                context?.setCards(filtredCards)
            }).catch((error) => {
                console.error(error);
            });
        } else {
            await getAll.then((data) => {
                const mountedCards = mountCards(data);
                context?.setCards(mountedCards)
            }).catch((error) => {
                console.error(error);
            });
        }


    }
    return {
        searchValue,
        setSearchValue,
        onKeyDown,
        search
    }
}
export default SearchLogic;