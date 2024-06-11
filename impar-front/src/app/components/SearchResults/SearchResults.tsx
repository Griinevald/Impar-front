import React, { useContext, useEffect } from 'react';
import { memo } from "react";
import Card from '../Card/Card';
import styles from './SearchResults.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import Icard from '@/app/types/Icard';
import SearchResultsLogic from './SearchResultsLogic';
import MyContext from '@/app/context/contextProvider';
import PanelLogic from "../../pageLogic";
import { getWithFilter } from '@/app/services/api';
import SearchLogic from '../SearchComponent/SearchLogic';
import Spinner from '../Spinner/Spinner';

const SearchResults = () => {
    const context = useContext(MyContext)
    const { handleClick, loadMore } = SearchResultsLogic();
    const { mountCards } = PanelLogic();


    useEffect(() => {
        (async () => {
            context?.setloading(true)
            const top: number = 8;
            getWithFilter(context!?.cards.length, top, '').then((data) => {
                const mountedCards = mountCards(data.value);
                context?.setCards(mountedCards)
                context?.setloading(false)
            }).catch((error) => {
                console.error(error);
            });
        })()
    }, [])

    return (
        <InfiniteScroll className={styles.searchResults}
            dataLength={context!?.cards?.length}
            next={() => loadMore()}
            hasMore={context!?.cards?.length != context!?.count}
            loader={
                <div style={{ width: '100%', margin: "2rem 0" }}>
                    <Spinner color='#891E73' />
                </div>
            }
        >
            <div className={styles.title}>
                <span>Resultado de Busca</span>
                <button onClick={() => handleClick()}>Novo Card</button>
            </div>
            <div key={context?.cards?.length} className={styles.scrolCards}>
                {context?.cards?.length != 0 && context?.cards?.map((card: Icard, index) => <Card ImgUrl={card.ImgUrl} Status={card.Status} key={index} Id={card.Id} Name={card.Name} IdImg={card.IdImg} />)}
                {context?.loading && <div className={styles.spinner}>
                    <Spinner margin='2rem 0' color='#891E73' />
                </div>}
            </div>
            <div className={styles.divNotFound}>
                {(context?.cards?.length == 0 && !context?.loading) && <h5>Nenhum item foi encontrado!</h5>}
            </div>

        </InfiniteScroll >
    )
}
export default SearchResults;