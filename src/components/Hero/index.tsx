import styles from './styles.module.scss';

export function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p>Olá, me chamo</p>
          <h2>Lucas Goulart</h2>
          <p>e sou desenvolvedor front-end</p>
        </div>
        <div className={styles.heroButtons}>
          <a 
            href='https://www.linkedin.com/in/goulartlcs'
            target="_blank"
          >
            <button className={styles.purpleCyanBorder}>
              <div className={styles.buttonContent}>
                <img src='/assets/icons/linkedin.svg' alt='LinkedIn' />
                <p>LinkedIn</p>
              </div>
            </button> 
          </a>
          <a 
            href='https://github.com/goulartlcs'
            target="_blank"
          >
            <button className={styles.margentaPurpleBorder}>
              <div className={styles.buttonContent}>
                <img src='/assets/icons/github.svg' alt='GitHub' />
                <p>GitHub</p>
              </div>
            </button> 
          </a>
        </div>
      </div>
    </div>
  );
}