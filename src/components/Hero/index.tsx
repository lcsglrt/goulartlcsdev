import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link 
            href='https://www.linkedin.com/in/goulartlcs'
          >
            <a target='_blank'>
              <button className={styles.purpleCyanBorder}>
                <div className={styles.buttonContent}>
                  <Image 
                    width={24}
                    height={24}
                    src='/assets/icons/linkedin.svg'
                  alt='LinkedIn' 
                  />
                  <p>LinkedIn</p>
                </div>
              </button> 
              </a>
          </Link>
          <Link
            href='https://github.com/goulartlcs'
          >
            <a 
              target="_blank"
            >
              <button className={styles.margentaPurpleBorder}>
                <div className={styles.buttonContent}>
                  <img 
                    width={24}
                    height={24}
                    src='/assets/icons/github.svg' 
                    alt='GitHub' 
                  />
                  <p>GitHub</p>
                </div>
              </button> 
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}