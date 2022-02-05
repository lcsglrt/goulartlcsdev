import styles from './home.module.scss';
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className={styles.about}>
          <img 
            src="/images/profile.jpeg" 
            alt="Lucas Goulart" 
            className={styles.profilePicture} 
          />
          <div className={styles.aboutContent}>
            <h1 className={styles.sectionTitle}>Sobre Mim</h1>
            <h3>Colombo, Paraná</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione porro dolores ipsum, maiores dolor illum cupiditate tenetur rerum nobis temporibus debitis necessitatibus rem explicabo facere veniam, laborum quaerat sint?</p>
            {/* <div className={styles.aboutSocial}>
              ...
            </div> */}
            <div className={styles.aboutButtons}>
              <a href="#">
                <button className={styles.margentaPurpleBorder}>
                  <div className={styles.buttonContent}>
                    <img 
                      src='/icons/download-cloud.svg' alt='Currículo'
                    />
                    <p>Currículo</p>
                  </div>
                </button>
              </a>
              <a href="#">
                <button className={styles.purpleCyanBorder}>
                  <div className={styles.buttonContent}>
                    <img src='/icons/mail.svg' alt='E-mail' />
                    <p>E-mail</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.experiences}>
          <h1 className={styles.sectionTitle}>Experiências</h1>
        </section>
      </main>
    </>
  )
}
