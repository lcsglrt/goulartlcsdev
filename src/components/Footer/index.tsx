import styles from './styles.module.scss';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div>
          <a href="https://instagram.com/goulartlcs/" target="_target">
            ©{year} - Desenvolvido por <span>Lucas Goulart</span>
          </a>
        </div>
        <div>
          Design by
          <a href="https://instagram.com/iuricode/">
            <img src='/assets/icons/iuricode-logo.svg' alt="Iuri Code" /> 
          </a>  
        </div> 
      </div>
    </footer>
  );
}