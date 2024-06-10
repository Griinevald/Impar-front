import MyContext from "@/app/context/contextProvider"
import { useContext } from "react"



const SearchResultsLogic = () => {
    const contex = useContext(MyContext)
    const handleClick = () => {
        contex?.setPanelPosition(!contex?.panelPosition)
    }
    return {
        handleClick
    }
}
export default SearchResultsLogic;