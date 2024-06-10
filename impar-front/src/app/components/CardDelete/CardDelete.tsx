import styles from './CardDelete.module.scss'
import Image from 'next/image';
import DeleteIcon from './icons/icon-trash.svg'
import { useContext } from 'react';
import MyContext from '@/app/context/contextProvider';
import CardDeleteLogic from './CardDeleteLogic';


const CardDelete = () => {
    const { closeCard, onclickOutside, deleteBackground } = CardDeleteLogic();

    const context = useContext(MyContext)

    return (

        <div ref={deleteBackground} onClick={(e) => onclickOutside(e)} style={{ display: `${context?.modalDelete ? 'flex' : 'none'}` }} className={`${styles.background}`}>
            <div className={styles.cardDelete}>
                <div onClick={() => closeCard()} className={styles.closeButton}>
                    <div className={styles.buttonXy}></div>
                    <div className={styles.buttonXx}></div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.imgCard}>
                        <Image className={styles.img} src={DeleteIcon} alt="Excluir" />
                    </div>
                    <h3>Excluir</h3>
                    <span>certeza que deseja excluir?</span>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.cardActions}>
                    <button className={styles.deleteButton}>Excluir</button>
                    <button onClick={() => closeCard()} className={styles.cancelButton}>Cancelar</button>
                </div>
            </div>
            
        </div>

    )
}
export default CardDelete;