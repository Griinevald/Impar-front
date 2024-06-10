"use client";
import TopHeader from "./components/TopHeader/TopHeader";
import styles from './page.module.scss'
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SearchResults from "./components/SearchResults/SearchResults";
import CardDelete from "./components/CardDelete/CardDelete";
import { useEffect, useState } from 'react';
import PanelSlider from "./components/Slider/PanelSlider";
import MyContext from "./context/contextProvider";
import Icard from "./types/Icard";
import { getAll } from "./services/api";
import PanelLogic from "./pageLogic";

export default function Home() {

  const [cards, setCards] = useState<Array<Icard>>([])
  const [panelPosition, setPanelPosition] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Icard | undefined>()
  const [ItemToDelete, setItemToDelete] = useState<number>(-1)
  const [Filename, setFilename] = useState<string>('');


  const { mountCards } = PanelLogic();

  useEffect(() => {
    (async () => {
      await getAll.then((data) => {
        const mountedCards = mountCards(data);
        setCards(mountedCards)
      }).catch((error) => {
        console.error(error);
      });
    })()
  }, [])


  return (
    <MyContext.Provider value={{ panelPosition, setPanelPosition, modalDelete, setModalDelete, ItemToDelete, setItemToDelete, selectedCard, setSelectedCard, cards, setCards, Filename, setFilename }}>
      <div className={styles.content}>
        <PanelSlider />
        <CardDelete />
        <TopHeader />
        <SearchComponent />
        <SearchResults results={cards} />
      </div>
    </MyContext.Provider>
  );
}
