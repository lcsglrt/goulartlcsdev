import { useState } from 'react';
import styles from './styles.module.scss';

export function Experiences() {
  const [showExperience, setShowExperience] = useState('');

  return (
    <>
      <div className={styles.experiencesContainer}>
        <div className={styles.experiencesContent}>
          <section>
            <h1 className='sectionTitle'>Experiências</h1>

            <div className={styles.experiencesList}>
              <aside>
                <ul>
                  <li className={showExperience === 'combatinfo' ? styles.selected : ''}>
                    <button 
                      type='button' 
                      onClick={() => setShowExperience('combatinfo')}
                    >
                      Combat Informática
                    </button>
                  </li>
                  <li>
                    <a href="#">
                      Adrenalina Motos
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Autônomo
                    </a>
                  </li>
                </ul>
              </aside>

              <div className={styles.experienceDetails}>
                <div>
                  <h4>Assistente de E-Commerce</h4>
                  <time>Nov 2020 - Mar 2021</time>
                </div>
                <h6>Combat Informática</h6>
                <p>
                  Responsável pela criação de conteúdo das mídias sociais, material digital e gráfico como artes para Instagram, banners, anúncios, flyers, certificados e edição de imagem de produtos para a loja virtual.
                </p>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}




