import { Link } from 'react-router-dom'
import { personalInfo, projects } from '../data/portfolio'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span className={styles.dot} />
            {personalInfo.available ? 'AVAILABLE FOR OPPORTUNITIES' : 'CURRENTLY UNAVAILABLE'}
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine1}>CHERVITH</span>
            <span className={styles.heroLine2}>
              NANNURU
              <span className={styles.heroAccent}>.</span>
            </span>
          </h1>

          <div className={styles.heroSub}>
            <p className={styles.heroRole}>{personalInfo.title}</p>
            <p className={styles.heroTagline}>{personalInfo.tagline}</p>
          </div>

          <div className={styles.heroCta}>
            <Link to="/projects" className={styles.btnPrimary}>
              VIEW WORK
              <span className={styles.btnArrow}>→</span>
            </Link>
            <Link to="/about" className={styles.btnOutline}>
              ABOUT ME
            </Link>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>8.04</span>
            <span className={styles.statLabel}>CGPA</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>03</span>
            <span className={styles.statLabel}>PROJECTS</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>TOP 10</span>
            <span className={styles.statLabel}>HACKATHON</span>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span>SCROLL</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* FEATURED PROJECTS STRIP */}
      <section className={styles.featured}>
        <div className={styles.featuredHeader}>
          <span className={styles.sectionTag}>// SELECTED WORK</span>
          <Link to="/projects" className={styles.seeAll}>SEE ALL →</Link>
        </div>

        <div className={styles.projectStrip}>
          {projects.map((p, i) => (
            <Link to={`/projects/${p.id}`} key={p.id} className={styles.projectCard}>
              <div className={styles.projectNum}>0{i + 1}</div>
              <div className={styles.projectCardContent}>
                <div className={styles.projectStatus} style={{ color: p.color }}>
                  {p.status}
                </div>
                <h3 className={styles.projectCardTitle}>{p.title}</h3>
                <p className={styles.projectCardDesc}>{p.description}</p>
                <div className={styles.projectTech}>
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectArrow} style={{ color: p.color }}>→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={styles.marqueeText}>
              MACHINE LEARNING &nbsp;·&nbsp; DEEP NEURAL NETWORKS &nbsp;·&nbsp; WEB DEVELOPMENT &nbsp;·&nbsp; PYTHON &nbsp;·&nbsp; OPEN TO WORK &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <p className={styles.ctaLabel}>// LET'S CONNECT</p>
          <h2 className={styles.ctaTitle}>Got a project or opportunity?</h2>
          <Link to="/contact" className={styles.btnPrimary}>
            GET IN TOUCH <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
