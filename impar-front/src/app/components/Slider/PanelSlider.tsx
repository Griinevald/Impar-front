import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './PanelSlider.module.scss';
import Image from 'next/image';
import CreateIcon from './icons/icone_criar.svg';
import Panel from './PanelLogic'
import MyContext from '@/app/context/contextProvider';



function PanelSlider() {

  const { fileInputRef, openInputFile, updateLabelInput, Filename, onclickOutside, outsideMainDiv, inputFile } = Panel();

  const contex = useContext(MyContext)


  return (
    <div className={styles.sliderPanel}>
      <motion.div
        className={styles.slider}
        initial={{ x: "100%" }}
        animate={{ x: contex?.panelPosition ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div ref={outsideMainDiv} onClick={onclickOutside} className={styles.sliderDiv}>
          <div className={styles.panel}>
            <div className={styles.title}>
              <Image className={styles.icon} src={CreateIcon} alt="" />
              <h1>Criar Card</h1>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.inputDiv}>
              <div className={styles.inputCardName}>
                <label htmlFor="CardName">Digite um nome para o card</label>
                <input placeholder='Digite o título' className={styles.inputText} type="text" id='CardName' />
              </div>
              <div className={styles.inputCardFile}>
                <label htmlFor="CardFile">Inclua uma imagem para aparecer no card</label>
                <input value={inputFile} ref={fileInputRef} onChange={updateLabelInput} type="file" id="CardFile" style={{ display: 'none' }} />
                <div className={styles.inputDivButton}>
                  <p>{Filename ? Filename : "Nenhum arquivo selecionado"}</p>
                  <div onClick={openInputFile} className={styles.inputButton}>Escolher arquivo</div>
                </div>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.divCreate}>
              <div className={styles.buttonCreate}>Criar card</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PanelSlider;
