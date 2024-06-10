import Icard from "@/app/types/Icard";
import Image from 'next/image';

import styles from './Card.module.scss';
import IconDelete from './icons/Icon-trash.svg'
import IconEdit from './icons/Icon-edit.svg'
import CardLogic from "./CardLogic";

const Card = ({ imgUrl, status, id, name, idImg }: Icard) => {

    const { openDeleteCard, openEditCard } = CardLogic();

    return (
        <div className={styles.mainPage}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.img}>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className={styles.separator} ></div>
                    <div className={styles.status}>
                        <p>
                            {name}
                        </p>
                    </div>
                </div>
                <div className={styles.bottonCard}>
                    <div className={styles.divButtonAction}>
                        <Image className={styles.icon} src={IconDelete} alt="Excluir" />
                        <p onClick={() => openDeleteCard(id)} className={styles.deleteHover}>Excluir</p>
                    </div>
                    <div className={styles.buttonSeparator}></div>
                    <div className={styles.divButtonAction}>
                        <Image className={styles.icon} src={IconEdit} alt="Editar" />
                        <p onClick={() => openEditCard(imgUrl, status, id, name, idImg)} className={styles.editHover}>Editar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;