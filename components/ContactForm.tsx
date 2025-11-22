import { useState } from 'react';
import styles from '@/styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactLayout}>
      {/* Left Column - Contact Info */}
      <div className={styles.contactInfoSection}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact Me</h1>
          <p className={styles.contactSubtitle}>
            Have a project in mind or just want to chat? I'd love to hear from you.
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className={styles.contactText}>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>himanchalkaushale432@gmail.com</div>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className={styles.contactText}>
              <div className={styles.contactLabel}>Location</div>
              <div className={styles.contactValue}>Based in India</div>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div className={styles.contactText}>
              <div className={styles.contactLabel}>Response Time</div>
              <div className={styles.contactValue}>Usually within 24 hours</div>
            </div>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Other ways to reach me</h3>
          <div className={styles.socialIcons}>
            <a href="https://github.com/himanchalkaushale" target="_blank" rel="noopener" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/himanchal-kaushale" target="_blank" rel="noopener" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com/himanchalkaushale" target="_blank" rel="noopener" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="mailto:himanchalkaushale432@gmail.com" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Himanchal Kaushale
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              himanchalkaushale432@gmail.com
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="your.email@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="What's this about?"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={styles.textarea}
              placeholder="Creating a Contact Us page can be a daunting task. Deciding whether to use a simple form or personalized approach is important..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            <span className={styles.buttonIcon}>✈️</span>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              ❌ Something went wrong. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
