import styles from './styles.module.scss';

export function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <section id='sobre-mim'>
            <img 
              src="/assets/images/avatar.png" 
              alt="Lucas Goulart" 
              className={styles.profilePicture} 
            />
            <div>
              <h1 className='sectionTitle'>Sobre Mim</h1>
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
                        src='/assets/icons/download-cloud.svg' alt='Currículo'
                      />
                      <p>Currículo</p>
                    </div>
                  </button>
                </a>
                <a href="#">
                  <button className={styles.purpleCyanBorder}>
                    <div className={styles.buttonContent}>
                      <img src='/assets/icons/mail.svg' alt='E-mail' />
                      <p>E-mail</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}