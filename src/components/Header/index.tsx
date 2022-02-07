import { useState } from 'react';
import styles from './styles.module.scss';
import Modal from 'react-modal';

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
          <a href="/">Home</a>
          <a href="#sobre-mim">Sobre Mim</a>
          <a href="#experiencias">Experiências</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <div className={styles.mobileMenu}>
          <button
            onClick={handleOpenMenu}
          >
            <img src="/assets/icons/menu.svg" alt="Menu" />
          </button>
          <Modal
            isOpen={menuModalIsOpen}
            onRequestClose={() => setMenuModalIsOpen(false)}
          >
            <nav>
              <a href="/">Home</a>
              <a href="#sobre-mim">Sobre Mim</a>
              <a href="#experiencias">Experiências</a>
              <a href="#projetos">Projetos</a>
            </nav>
          </Modal>
        </div>
      </div>
    </header>
  )
}