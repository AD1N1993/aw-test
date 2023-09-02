import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="amwork"/>
        </header>
    );
};

export default Header;
