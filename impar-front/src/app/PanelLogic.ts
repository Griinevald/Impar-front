import Icard from "./types/Icard";
import { ICar } from "./types/apiRess";

const PanelLogic = () => {
    const mountCards = (cards: Array<ICar>) => {

        const renderCard: Array<Icard> = [];
        cards.map((card: ICar) => renderCard.push({
            imgUrl: `data:image/${card?.status?.split('.')?.pop()?.toLowerCase()};base64,${card.photo.base64}`,
            status: card.status,
            name: card.name,
            id: card.id
        }));
        return renderCard;
    }
    return {
        mountCards
    }
}
export default PanelLogic