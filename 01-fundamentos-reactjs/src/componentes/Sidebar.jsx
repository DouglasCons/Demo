import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://th.bing.com/th/id/R.e88eebf01c562b3fabd14a5b41b147dd?rik=SA73YdgbK6wNUw&riu=http%3a%2f%2fcdn.business2community.com%2fwp-content%2fuploads%2f2016%2f03%2f90c52610193aa542d4436bf8674ad63d.jpg&ehk=o9olQc%2bhxCpEWZxCH3t0fQ0Wf02Q%2f0FEG5j4%2fF%2f41dc%3d&risl=&pid=ImgRaw&r=0" alt="" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/douglascons.png" />

                <strong>Douglas Barbosa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}