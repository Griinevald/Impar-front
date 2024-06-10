import styles from './TopHeader.module.scss'
import LogoTeste from './Icons/logo-teste.svg'
import Image from 'next/image';
const TopHeader = () => {
    return (
        <div className={styles.TopHeader}>
            <Image className={styles.icon} src={LogoTeste} alt="Excluir" />
        </div>
    )
}
export default TopHeader;