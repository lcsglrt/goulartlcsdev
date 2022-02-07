import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div>
          <Link href="https://instagram.com/goulartlcs/">
            <a target="_target" rel="noreferrer">
              ©{year} - Desenvolvido por <span>Lucas Goulart</span>
            </a>
          </Link>
        </div>
        <div>
          Design by
          <Link href="https://instagram.com/iuricode/">
            <a target="_target" rel="noreferrer">
              <Image 
                className={styles.logoIuriCode}
                width={24}
                height={24}
                src='/assets/icons/iuricode-logo.svg' 
                alt="Iuri Code" /> 
            </a> 
          </Link> 
        </div> 
      </div>
    </footer>
  );
}