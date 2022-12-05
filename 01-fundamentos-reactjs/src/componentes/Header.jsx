import styles from './Header.module.css'

import igniteLogo from '../images/ignitesimbol.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}