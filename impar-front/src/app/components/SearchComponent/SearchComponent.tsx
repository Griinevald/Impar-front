"use client";
import { useState } from "react";
import styles from './SearchComponent.module.scss'
import Banner from './icons/FundoBusca.png'
import Lupa from './icons/lupa.svg'
import SearchLogic from './SearchLogic'

const SearchComponent = () => {

    const { searchValue, onKeyDown, setSearchValue, search } = SearchLogic();

    return (
        <div style={{ backgroundImage: `url(${Banner.src})` }} className={styles.divBanner}>
            <div className={styles.divInput}>
                <div className={styles.search}>
                    <input
                        type="text"
                        value={searchValue}
                        onKeyDown={onKeyDown}
                        placeholder="Digite aqui sua busca..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className={styles.buttonSearch}>
                        <img onClick={() => search()} className={styles.img} src={Lupa.src} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}


export default SearchComponent;