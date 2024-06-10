import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './PanelSlider.module.scss';
import Image from 'next/image';
import CreateIcon from './icons/icone_criar.svg';
import Panel from './PanelLogic'
import MyContext from '@/app/context/contextProvider';



const PanelSlider = () => {

  const { fileInputRef, openInputFile, updateLabelInput, onclickOutside, outsideMainDiv, inputFile, getText, forceUpdate, createCard, updateItem } = Panel();

  const context = useContext(MyContext)


  return (
    <div className={styles.sliderPanel}>
      <motion.div
        style={{display:context?.panelPosition ? "Flex" : "none"}}
        className={styles.slider}
        initial={{ x: "100%" }}
        animate={{ x: context?.panelPosition ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div key={forceUpdate} ref={outsideMainDiv} onClick={onclickOutside} className={styles.sliderDiv}>
          <div className={styles.panel}>
            <div className={styles.title}>
              <Image className={styles.icon} src={CreateIcon} alt="" />
              <h1>Criar Card</h1>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.inputDiv}>
              <div className={styles.inputCardName}>
                <label htmlFor="CardName">Digite um nome para o card</label>
                <input value={context?.selectedCard?.name} onChange={getText} placeholder='Digite o título' className={styles.inputText} type="text" id='CardName' />
              </div>
              <div className={styles.inputCardFile}>
                <label htmlFor="CardFile">Inclua uma imagem para aparecer no card</label>
                <input value={inputFile} ref={fileInputRef} onChange={updateLabelInput} type="file" id="CardFile" style={{ display: 'none' }} />
                <div className={styles.inputDivButton}>
                  <p>{context?.Filename ? context?.Filename : "Nenhum arquivo selecionado"}</p>
                  <div onClick={openInputFile} className={styles.inputButton}>Escolher arquivo</div>
                </div>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.divCreate}>
              {!context?.selectedCard?.id ? <div onClick={createCard} className={styles.buttonCreate}>Criar card</div> :
                <div onClick={updateItem} className={styles.buttonCreate}>Atualizar</div>
              }

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PanelSlider;
