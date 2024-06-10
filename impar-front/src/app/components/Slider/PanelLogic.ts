import MyContext from "@/app/context/contextProvider";
import Icard from "@/app/types/Icard";
import { ICar } from "@/app/types/apiRess";
import { useState, useRef, useContext } from "react";
import { addItem, updateItemId } from '../../services/api'
import pageLogic from '../../pageLogic'
const PanelLogic = (): any => {
    const [inputFile, setInputFile] = useState<string>('');
    const [forceUpdate, setforceUpdate] = useState<number>(1);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const outsideMainDiv = useRef<HTMLInputElement | null>(null);
    const context = useContext(MyContext);
    const { mountCards } = pageLogic()

    const openInputFile = () => {
        const btn = fileInputRef.current;
        if (btn) {
            btn.click();
        }
    };
    const setHide = () => {
        context?.setPanelPosition(false)
        context?.setSelectedCard(undefined);
        setInputFile('')
        context?.setFilename('')
        setforceUpdate(forceUpdate + 1)
    }
    const updateLabelInput = (ele: HTMLInputElement | any) => {
        if (ele.target.files[0].name) {
            const stringName = ele.target.files[0].name.substring(0, 30);
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
            const extension = stringName.split('.').pop().toLowerCase();
            const isImg = imageExtensions.includes(extension);

            if (isImg) {
                context?.setFilename(stringName)
                setInputFile(ele.target.value);

                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result as string
                    const newCard: Icard = {
                        ...context?.selectedCard,
                        status: stringName,
                        imgUrl: base64,
                    };
                    context?.setSelectedCard(newCard);
                };
                reader.readAsDataURL(ele.target.files?.[0]);
            } else {
                context?.setFilename('')
                ele.target.value = '';
                setInputFile(ele.target.value);
            }

        }
    }
    const onclickOutside = (ele: HTMLInputElement | any) => {
        const className = ele.target.className;
        if (className.includes("sliderDiv")) {
            setHide()
        }
    }
    const getText = (ele: HTMLInputElement | any) => {
        const string = ele.target.value;
        const newCard: Icard = {
            ...context?.selectedCard,
            name: string,
        };
        context?.setSelectedCard(newCard);

    }
    const createCard = async () => {
        const objToPost: ICar = {
            name: context?.selectedCard?.name,
            status: context?.selectedCard?.status,
            photo: {
                base64: context?.selectedCard?.imgUrl?.split(';base64,')[1]
            }
        }
        await addItem(objToPost).then(async (data) => {
            const setCard = mountCards([data]);
            if (context?.cards) {
                context?.setCards([...context?.cards, ...setCard])
            } else {
                context?.setCards(setCard)
            }
            setHide()
        }).catch((error) => {
            console.error(error);
        });

    }
    const updateItem = async () => {
        const objToPost: ICar = {
            id: context?.selectedCard?.id,
            name: context?.selectedCard?.name,
            status: context?.selectedCard?.status,
            photoId: context?.selectedCard?.idImg,
            photo: {
                base64: context?.selectedCard?.imgUrl?.split(';base64,')[1]
            }
        }
        if (objToPost?.id) {
            await updateItemId(objToPost.id, objToPost).then(async (data) => {
                const setCard: any = mountCards([data]);
                if (context?.cards) {
                    const updatedItems: Array<Icard> = context?.cards.map((item: Icard) => {
                        if (item.id === objToPost?.id) {
                            debugger
                            return { ...setCard[0] };
                        } else {
                            return { ...item }
                        }
                    });
                    context?.setCards(updatedItems)

                }
                setHide()
            }).catch((error) => {
                console.error(error);
            });
        }
    }

    return {
        fileInputRef,
        openInputFile,
        updateLabelInput,
        onclickOutside,
        outsideMainDiv,
        inputFile,
        getText,
        forceUpdate,
        createCard,
        setforceUpdate,
        updateItem
    }
}
export default PanelLogic;

