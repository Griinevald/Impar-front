import MyContext from "@/app/context/contextProvider";
import Icard from "@/app/types/Icard";
import { ICar } from "@/app/types/apiRess";
import { useState, useRef, useContext } from "react";
import { addItem, getWithFilter, updateItemId } from '../../services/api'
import pageLogic from '../../pageLogic'
const PanelLogic = (): any => {
    const [inputFile, setInputFile] = useState<string>('');
    const [valid, setValid] = useState<boolean>(true);
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
        if (!context?.loading) {
            context?.setPanelPosition(false)
            context?.setSelectedCard(undefined);
            setInputFile('')
            context?.setFilename('')
            setValid(true)
            setforceUpdate(forceUpdate + 1)
        }
    };

    const updateLabelInput = (ele: HTMLInputElement | any) => {
        if (ele.target.files[0].name) {
            const str = ele.target.files[0].name
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
            const extension = ele.target.files[0].name.split('.').pop().toLowerCase();
            const isImg = imageExtensions.includes(extension);

            if (isImg) {
                context?.setFilename(str)
                setInputFile(ele.target.value);

                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result as string
                    const newCard: Icard = {
                        ...context?.selectedCard,
                        Status: str,
                        ImgUrl: base64,
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
    };

    const onclickOutside = (ele: HTMLInputElement | any) => {
        const className = ele.target.className;
        if (className.includes("sliderDiv")) {
            if (!context?.loading) {
                setHide()
            }
        }
    };

    const getText = (ele: HTMLInputElement | any) => {
        const string = ele.target.value;
        const newCard: Icard = {
            ...context?.selectedCard,
            Name: string,
        };
        context?.setSelectedCard(newCard);

    };

    const orderArray = (array: Array<Icard>) => {
        const orded = array.sort((a: any, b: any) => {
            const nameA = a?.Name.toLowerCase();
            const nameB = b?.Name.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        return orded;
    };

    const validInput = () => {
        if (!context?.Filename || !context?.selectedCard?.Name) {
            setValid(false)
            return false;
        } else {
            return true;
        }
    }

    const createCard = async () => {
        context?.setloading(true)
        if (validInput()) {
            setValid(true)
            if (!context?.loading) {
                const objToPost: ICar = {
                    Name: context?.selectedCard?.Name,
                    Status: context?.selectedCard?.Status,
                    Photo: {
                        Base64: context?.selectedCard?.ImgUrl?.split(';base64,')[1]
                    }
                }
                addItem(objToPost).then(async (data: ICar) => {
                    console.log(data)
                    const updatedItems: any = getWithFilter(context!?.cards.length, 8, '')

                    const setCard = mountCards(updatedItems);

                    if (context?.cards) {
                        const allCards = orderArray([...context?.cards, ...setCard]);
                        context?.setCards(allCards);
                    } else {
                        context?.setCards(setCard);
                    }

                    context?.setloading(false)
                    setHide()
                }).catch((error) => {
                    console.error(error);
                });
            }
        } else {
            context?.setloading(false)
        }

    };

    const updateItem = async () => {
        context?.setloading(true)
        if (validInput()) {
            if (!context?.loading) {
                const objToPost: ICar = {
                    Id: context?.selectedCard?.Id,
                    Name: context?.selectedCard?.Name,
                    Status: context?.selectedCard?.Status,
                    PhotoId: context?.selectedCard?.IdImg,
                    Photo: {
                        Base64: context?.selectedCard?.ImgUrl?.split(';base64,')[1]
                    }
                }
                if (objToPost?.Id) {
                    updateItemId(objToPost.Id, objToPost).then((data) => {
                        console.log(data)
                        const setCard: any = mountCards([objToPost]);
                        if (context?.cards) {
                            const updatedItems: Array<Icard> = context?.cards.map((item: Icard) => {
                                if (item.Id === objToPost?.Id) {
                                    return { ...setCard[0] };
                                } else {
                                    return { ...item }
                                }
                            });
                            context?.setCards(updatedItems)

                        }
                        context?.setloading(false)
                        setHide()
                    }).catch((error) => {
                        console.error(error);
                    });
                }
            }
        } else {
            context?.setloading(false)
        }
    };

    const getLabelString = (str: string) => {
        return str.length <= 30 ? str : str.substring(0, 17) + '...' + str.slice(-10)
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
        updateItem,
        valid,
        getLabelString
    };
};
export default PanelLogic;