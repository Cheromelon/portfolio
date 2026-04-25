import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>// CONTACT</span>
        <h1 className={styles.pageTitle}>
          LET'S<br /><span className={styles.pageTitleOutline}>TALK.</span>
        </h1>
      </div>

      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.leftDesc}>
            I'm open to internships, research collaborations, and interesting projects. Drop me a message and I'll get back to you.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>EMAIL</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactValue}>
                {personalInfo.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>LOCATION</span>
              <span className={styles.contactValue}>{personalInfo.location}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>STATUS</span>
              <span className={styles.contactValue} style={{ color: '#4ade80' }}>● OPEN TO WORK</span>
            </div>
          </div>

          <div className={styles.socials}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <span className={styles.socialLabel}>GITHUB</span>
              <span className={styles.socialArrow}>→</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
              <span className={styles.socialLabel}>LINKEDIN</span>
              <span className={styles.socialArrow}>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className={styles.right}>
          {sent ? (
            <div className={styles.sentMsg}>
              <div className={styles.sentIcon}>✓</div>
              <h2 className={styles.sentTitle}>MESSAGE SENT</h2>
              <p className={styles.sentDesc}>Your mail client should have opened. Looking forward to connecting!</p>
              <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">NAME *</label>
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">EMAIL *</label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">MESSAGE *</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE →
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
