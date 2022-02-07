import { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [menuModalIsOpen, setMenuModalIsOpen] = useState(false);

  function handleOpenMenu() {
    setMenuModalIsOpen(true);
  }

  function handleCloseMenu() {
    setMenuModalIsOpen(false);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Goulart LCS</h1>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='#sobre-mim'>Sobre Mim</Link>
          <Link href='#experiencias'>Experiências</Link>
          <Link href='#projetos'>Projetos</Link>
        </nav>
        <div className={styles.mobileMenu}>
          <button
            onClick={handleOpenMenu}
          >
            <Image 
              width={24}
              height={24}
              src="/assets/icons/menu.svg" 
              alt="Menu" 
            />
          </button>
          <Modal
            isOpen={menuModalIsOpen}
            onRequestClose={() => setMenuModalIsOpen(false)}
          >
            <nav>
              <Link href='/'>Home</Link>
              <Link href='#sobre-mim'>Sobre Mim</Link>
              <Link href='#experiencias'>Experiências</Link>
              <Link href='#projetos'>Projetos</Link>
            </nav>
          </Modal>
        </div>
      </div>
    </header>
  )
}