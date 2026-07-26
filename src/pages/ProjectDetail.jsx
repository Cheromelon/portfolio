import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <main className={styles.main}>
        <div className={styles.notFound}>
          <h1>PROJECT NOT FOUND</h1>
          <Link to="/projects" className={styles.back}>
            ← BACK TO PROJECTS
          </Link>
        </div>
      </main>
    )
  }

  const currentIndex = projects.findIndex(p => p.id === project.id)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className={styles.main}>
      <Link to="/projects" className={styles.backLink}>
        ← ALL PROJECTS
      </Link>

      <div
        className={styles.hero}
        style={{ borderColor: project.color }}
      >
        <div className={styles.heroBadge}>
          <span
            className={styles.heroStatus}
            style={{ color: project.color }}
          >
            ● {project.status}
          </span>
          <span className={styles.heroCat}>{project.category}</span>
        </div>

        <h1 className={styles.heroTitle}>{project.title}</h1>
        <p className={styles.heroPeriod}>{project.period}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contentMain}>
          <div className={styles.block}>
            <span className={styles.blockLabel}>// OVERVIEW</span>
            <p className={styles.blockText}>{project.description}</p>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}>// DETAILS</span>
            <p className={styles.blockText}>{project.details}</p>
          </div>
        </div>

        <div className={styles.contentSide}>
          <div className={styles.sideCard}>
            <span className={styles.sideLabel}>TECH STACK</span>

            <div className={styles.techList}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Show only for deployed projects */}
          {project.status === 'SHIPPED' && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={styles.demoBtn}
            >
              LIVE DEMO →
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.githubBtn}
          >
            VIEW ON GITHUB →
          </a>
        </div>
      </div>

      {/* NEXT PROJECT */}
      <div className={styles.nextProject}>
        <span className={styles.nextLabel}>// NEXT PROJECT</span>

        <Link
          to={`/projects/${next.id}`}
          className={styles.nextCard}
        >
          <div>
            <p className={styles.nextTitle}>{next.title}</p>
            <p className={styles.nextPeriod}>{next.period}</p>
          </div>

          <span
            className={styles.nextArrow}
            style={{ color: next.color }}
          >
            →
          </span>
        </Link>
      </div>
    </main>
  )
}