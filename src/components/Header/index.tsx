import styles from './styles.module.scss';

export function Header() {
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
      </div>
    </header>
  )
}