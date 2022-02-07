import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type ExperiencesProps ={
  company: string,
  role: string,
  description: string,
  period: string
}

export function Experiences({ experiences }) {
  const [experienceSelected, setExperienceSeletected] = useState({} as ExperiencesProps);
  

  useEffect(() => {
    setExperienceSeletected(experiences[0]);
  }, []);

  return (
    <>
      <div className={styles.experiencesContainer}>
        <div className={styles.experiencesContent}>
          <section id='experiencias'>
            <h1 className='sectionTitle'>Experiências</h1>

            <div className={styles.experiencesList}>
              <aside>
                <ul>
                  { 
                    experiences.map(experience => (
                      <li 
                        key={experience.company}
                        className={experienceSelected.company === experience.company ? styles.selected : ''}
                      >
                        <button 
                          type='button' 
                          onClick={() => setExperienceSeletected(experience)}
                        >
                          {experience.company}
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </aside>

              {
                <div className={styles.experienceDetails}>
                  <div>
                    <h4>{experienceSelected.role}</h4>
                    <time>{experienceSelected.period}</time>
                  </div>
                  <h6>{experienceSelected.company}</h6>
                  <p>{experienceSelected.description}</p>
                </div>
              }
              
            </div>

          </section>
        </div>
      </div>
    </>
  );
}




