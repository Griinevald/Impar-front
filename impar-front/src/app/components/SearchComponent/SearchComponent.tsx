"use client";
import { useState } from "react";
import styles from './SearchComponent.module.scss'
import Banner from './icons/FundoBusca.png'
import Lupa from './icons/lupa.svg'


const SearchComponent = () => {
    const [searchValue, setSearchValue] = useState("");

    const onKeyDown = (event: any) => {
        if (event.key == "Enter") {
            console.log(searchValue)
        }
    }

    return (
        <div style={{ backgroundImage: `url(${Banner.src})` }} className={styles.divBanner}>
            <div className={styles.divInput}>
                <div className={styles.search}>
                    <input
                        type="text"
                        value={searchValue}
                        style={{ backgroundImage: `url(${Lupa.src})` }}
                        onKeyDown={onKeyDown}
                        placeholder="Digite aqui sua busca..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>
        </div>

    );
}


export default SearchComponent;