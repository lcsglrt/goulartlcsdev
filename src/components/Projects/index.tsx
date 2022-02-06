import styles from './styles.module.scss';

type Project = {
  thumbnail: string,
  title: string,
  description: string,
  tech: string,
  demo_link: string,
  repo_link: string
}

interface Projects {
  projects: Project[],
}

export function Projects({ projects }: Projects) {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <section id='projetos'>
          <h1 className='sectionTitle'>Projetos</h1>

          <div className={styles.projectsList}>
            {
              projects.map(project => (
                <div key={project.title}>
                  <div className={styles.projectsThumbnail}>
                    <img src={project.thumbnail} alt={project.title} />
                  </div>
                  <div className={styles.projectDetails}>
                    <h6>{project.title}</h6>
                    <p>{project.description}</p>
                    <span>{project.tech}</span>
                    <div className={styles.projectsButton}>
                      {project.demo_link ? 
                        <a 
                          href={project.demo_link}
                          target="_blank"
                        >
                          <button className={styles.margentaPurpleBorder}>
                            <div className={styles.buttonContent}>
                              <img src='/assets/icons/link.svg' alt='Visualizar' />
                              <p>Visualizar</p>
                            </div>
                          </button> 
                        </a> : null
                      }
                      <a 
                        href={project.repo_link}
                        target="_blank"
                      >
                        <button className={styles.margentaPurpleBorder}>
                          <div className={styles.buttonContent}>
                            <img src='/assets/icons/github.svg' alt='Código' />
                            <p>Código</p>
                          </div>
                        </button> 
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}