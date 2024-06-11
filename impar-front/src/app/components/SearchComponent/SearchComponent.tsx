"use client";
import { useContext, useState } from "react";
import styles from './SearchComponent.module.scss'
import Banner from './icons/FundoBusca.png'
import Lupa from './icons/lupa.svg'
import SearchLogic from './SearchLogic'
import MyContext from "@/app/context/contextProvider";

const SearchComponent = () => {

    const { onKeyDown, search } = SearchLogic();

    const context = useContext(MyContext);

    return (
        <div style={{ backgroundImage: `url(${Banner.src})` }} className={styles.divBanner}>
            <div className={styles.divInput}>
                <div className={styles.search}>
                    <input
                        type="text"
                        value={context?.searchValue}
                        onKeyDown={onKeyDown}
                        placeholder="Digite aqui sua busca..."
                        onChange={(e) => context?.setSearchValue(e.target.value)}
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