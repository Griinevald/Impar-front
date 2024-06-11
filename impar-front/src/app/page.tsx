"use client"

import TopHeader from "./components/TopHeader/TopHeader";
import styles from './page.module.scss'
import SearchComponent from "./components/SearchComponent/SearchComponent";
import SearchResults from "./components/SearchResults/SearchResults";
import CardDelete from "./components/CardDelete/CardDelete";
import { useState } from 'react';
import PanelSlider from "./components/Slider/PanelSlider";
import MyContext from "./context/contextProvider";
import Icard from "./types/Icard";

export default function Home() {

  const [cards, setCards] = useState<Array<Icard>>([])
  const [panelPosition, setPanelPosition] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Icard | undefined>();
  const [ItemToDelete, setItemToDelete] = useState<number>(-1);
  const [Filename, setFilename] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <MyContext.Provider value={{ panelPosition, setPanelPosition, modalDelete, setModalDelete, ItemToDelete, setItemToDelete, selectedCard, setSelectedCard, cards, setCards, Filename, setFilename, count, setCount, loading, setloading, searchValue, setSearchValue }}>
        <div className={styles.content}>
          <PanelSlider />
          <CardDelete />
          <TopHeader />
          <SearchComponent />
          <SearchResults />
        </div>
      </MyContext.Provider>
    </>
  );
}
