import Icard from "./types/Icard";
import { ICar } from "./types/apiRess";

const PanelLogic = () => {
    const mountCards = (cards: Array<ICar>) => {
        const renderCard: Array<Icard> = cards.map((card: ICar) => {
            return {
                ImgUrl: `data:image/${card?.Status?.split('.')?.pop()?.toLowerCase()};base64,${card?.Photo?.Base64}`,
                Status: card.Status,
                Name: card.Name,
                Id: card.Id,
                IdImg: card?.PhotoId
            };
        });
        return renderCard;
    }
    return {
        mountCards
    }
}
export default PanelLogic