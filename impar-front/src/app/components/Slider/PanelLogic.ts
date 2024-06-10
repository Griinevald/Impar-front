import MyContext from "@/app/context/contextProvider";
import { useState, useEffect, useRef, useContext } from "react";
const PanelLogic = (): any => {
    const [Filename, setFilename] = useState<string>('');
    const [inputFile, setInputFile] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const outsideMainDiv = useRef<HTMLInputElement | null>(null);
    const context = useContext(MyContext);

    const openInputFile = () => {
        const btn = fileInputRef.current;
        if (btn) {
            btn.click();
        }
    };
    const setShowHide = (value: boolean) => {
        context?.setPanelPosition(value);
        context?.setSelectedCard(undefined);
    }
    const updateLabelInput = (ele: HTMLInputElement | any) => {
        if (ele.target.files[0].name) {
            const stringName = ele.target.files[0].name.substring(0, 30)
            const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
            const extension = stringName.split('.').pop().toLowerCase();
            const isImg = imageExtensions.includes(extension);
            if (isImg) {
                setFilename(stringName)
                setInputFile(ele.target.value);
            } else {
                setFilename('')
                ele.target.value = '';
                setInputFile(ele.target.value);
            }

        }
    }
    const onclickOutside = (ele: HTMLInputElement | any) => {
        const className = ele.target.className;
        if (className.includes("sliderDiv")) {
            context?.setPanelPosition(false)
        }
    }

    return {
        fileInputRef,
        openInputFile,
        setShowHide,
        updateLabelInput,
        Filename,
        onclickOutside,
        outsideMainDiv,
        inputFile
    }
}
export default PanelLogic;