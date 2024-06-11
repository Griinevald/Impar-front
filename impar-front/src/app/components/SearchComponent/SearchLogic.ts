import { useContext } from "react";
import pageLogic from './../../pageLogic'
import {  getWithFilter } from "@/app/services/api";
import {  ICarODataResponse } from "@/app/types/apiRess";
import MyContext from "@/app/context/contextProvider";
const SearchLogic = () => {
    const { mountCards } = pageLogic();
    const context = useContext(MyContext);
    const onKeyDown = (event: any) => {
        if (event.key == "Enter") {
            search()
        }
    }
    const search = () => {
        context?.setCards([])
        searchFiles()
    }

    const searchFiles =  () => {
        context?.setloading(true)
        if (context!?.searchValue.length > 0) {
             getWithFilter(0, 8, context!?.searchValue).then((data: ICarODataResponse) => {
                 context?.setloading(false)
                const filtredCards = mountCards(data.value);
                context?.setCards(filtredCards)
            }).catch((error) => {
                console.error(error);
            });
        } else {
             getWithFilter(0, 8, '').then((data: ICarODataResponse) => {
                context?.setloading(false)
                const filtredCards = mountCards(data.value);
                context?.setCards(filtredCards)
            }).catch((error) => {
                console.error(error);
            });
        }


    }
    return {
        onKeyDown,
        search
    }
}
export default SearchLogic;