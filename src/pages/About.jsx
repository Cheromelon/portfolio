import { personalInfo, education, skills, achievements } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>// ABOUT</span>
        <h1 className={styles.pageTitle}>THE PERSON<br /><span className={styles.pageTitleOutline}>BEHIND THE CODE.</span></h1>
      </div>

      {/* PROFILE SECTION */}
      <section className={styles.profile}>
        <div className={styles.profileImage}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageInitials}>CN</span>
            <div className={styles.imageCorner1} />
            <div className={styles.imageCorner2} />
          </div>
          <div className={styles.imageCaption}>
            <span className={styles.imageName}>Chervith Nannuru</span>
            <span className={styles.imageRole}>CS Undergrad · Mahindra University</span>
          </div>
          <div className={styles.imageStatus}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Open to internships</span>
          </div>

          {/* QUICK FACTS */}
          <div className={styles.quickFacts}>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>LOCATION</span>
              <span className={styles.factValue}>{personalInfo.location}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>CGPA</span>
              <span className={styles.factValue}>{personalInfo.cgpa} / 10</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>YEAR</span>
              <span className={styles.factValue}>{personalInfo.year}</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>ROLE</span>
              <span className={styles.factValue}>SW Vice Head, AERO Club</span>
            </div>
            <div className={styles.factRow}>
              <span className={styles.factLabel}>EMAIL</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.factLink}>
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className={styles.socialLinks}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialBtn}>
              GITHUB →
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialBtn}>
              LINKEDIN →
            </a>
          </div>

          {/* RESUME DOWNLOAD */}
          {/* RESUME */}
<div className={styles.resumeActions}>
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.resumeBtn}
  >
    👁 VIEW RESUME
  </a>

  <a
    href="/resume.pdf"
    download="Chervith_Nannuru_Resume.pdf"
    className={styles.resumeBtn}
  >
    ⬇ DOWNLOAD
  </a>
</div>
        </div>

        <div className={styles.profileContent}>
          {/* BIO */}
          <div className={styles.bioBlock}>
            <span className={styles.bioTag}>// WHO I AM</span>
            <p className={styles.bioPrimary}>{personalInfo.bio}</p>
            <p className={styles.bioSecondary}>{personalInfo.bioExtended}</p>
          </div>

          {/* INTERESTS */}
          <div className={styles.interestsBlock}>
            <span className={styles.bioTag}>// BEYOND THE SCREEN</span>
            <div className={styles.interestList}>
              {personalInfo.interests.map((interest) => (
                <span key={interest} className={styles.interestTag}>
                  {interest}
                </span>
              ))}
            </div>
            <p className={styles.bioSecondary} style={{ marginTop: '1rem' }}>
              I'm the Software Vice Head of the AERO Club at Mahindra University — bridging software and aerospace engineering with student-led projects.
            </p>
          </div>

          {/* WHAT I DO */}
          <div className={styles.whatBlock}>
            <span className={styles.bioTag}>// WHAT I DO</span>
            <div className={styles.whatGrid}>
              <div className={styles.whatCard}>
                <div className={styles.whatIcon}>⬡</div>
                <h3 className={styles.whatTitle}>Machine Learning</h3>
                <p className={styles.whatDesc}>Building predictive models and exploring deep learning — from salary prediction to human perception modelling.</p>
              </div>
              <div className={styles.whatCard}>
                <div className={styles.whatIcon}>◈</div>
                <h3 className={styles.whatTitle}>Web Development</h3>
                <p className={styles.whatDesc}>Crafting functional, user-first web platforms using modern HTML, CSS, JavaScript, and Node.js.</p>
              </div>
              <div className={styles.whatCard}>
                <div className={styles.whatIcon}>◉</div>
                <h3 className={styles.whatTitle}>Research</h3>
                <p className={styles.whatDesc}>Currently researching how deep networks can model annotator disagreement — capturing human uncertainty in image labeling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.skillsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>// SKILLS & TOOLS</span>
        </div>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>{category}</h3>
              <div className={styles.skillList}>
                {list.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className={styles.educationSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>// EDUCATION</span>
        </div>
        <div className={styles.eduList}>
          {education.map((edu, i) => (
            <div key={i} className={styles.eduCard}>
              <div className={styles.eduLeft}>
                <span className={styles.eduPeriod}>{edu.period}</span>
                <span className={styles.eduLocation}>{edu.location}</span>
              </div>
              <div className={styles.eduRight}>
                <h3 className={styles.eduSchool}>{edu.school}</h3>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <span className={styles.eduGrade}>{edu.grade}</span>
                {edu.courses.length > 0 && (
                  <div className={styles.eduCourses}>
                    <span className={styles.coursesLabel}>COURSES:</span>
                    <div className={styles.coursesList}>
                      {edu.courses.map((c) => (
                        <span key={c} className={styles.courseTag}>{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className={styles.achSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>// ACHIEVEMENTS</span>
        </div>
        <div className={styles.achGrid}>
          {achievements.map((ach, i) => (
            <div key={i} className={styles.achCard}>
              <div className={styles.achNum}>0{i + 1}</div>
              <div>
                <h3 className={styles.achTitle}>{ach.title}</h3>
                <p className={styles.achOrg}>{ach.org} · {ach.date}</p>
                <p className={styles.achDesc}>{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
