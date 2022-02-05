import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Goulart LCS</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre Mim</a>
          <a href="#">Experiência</a>
          <a href="#">Projetos</a>
        </nav>
      </div>
    </header>
  )
}