import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const categories = ['ALL', 'ML / Deep Learning', 'Web Development', 'ML / Data Science']

export default function Projects() {
  const [active, setActive] = useState('ALL')

  const filtered = active === 'ALL' ? projects : projects.filter(p => p.category === active)

  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>// WORK</span>
        <h1 className={styles.pageTitle}>
          SELECTED<br /><span className={styles.pageTitleOutline}>PROJECTS.</span>
        </h1>
        <p className={styles.pageDesc}>
          A collection of machine learning models, web platforms, and research work.
        </p>
      </div>

      {/* FILTER */}
      <div className={styles.filterBar}>
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <Link to={`/projects/${p.id}`} key={p.id} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardNum}>0{i + 1}</div>
              <div className={styles.cardStatus} style={{ color: p.color, borderColor: p.color }}>
                {p.status}
              </div>
            </div>

            <div className={styles.cardAccent} style={{ background: p.color }} />

            <h2 className={styles.cardTitle}>{p.title}</h2>
            <p className={styles.cardPeriod}>{p.period}</p>
            <p className={styles.cardDesc}>{p.description}</p>

            <div className={styles.cardFooter}>
              <div className={styles.cardTech}>
                {p.tech.map(t => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
              <span className={styles.cardArrow} style={{ color: p.color }}>VIEW →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
