import React from 'react';
import Card from '../Card/Card';
import styles from './SearchResults.module.scss'
import { ISearchResults } from '@/app/types/ISearchResults';
import Icard from '@/app/types/Icard';
import SearchResultsLogic from './SearchResultsLogic';

const SearchResults = ({ results }: ISearchResults) => {

    const { handleClick } = SearchResultsLogic();

    return (
        <div className={styles.searchResults}>
            <div className={styles.title}>
                <span>Resultado de Busca</span>
                <button onClick={() => handleClick()}>Novo Card</button>
            </div>
            <div className={styles.scrolCards}>
                {results?.map((card: Icard) => <Card imgUrl={card.imgUrl} status={card.status} id={card.id} name={card.name} idImg={card.idImg} />)}
            </div>
        </div>
    )
}
export default SearchResults;