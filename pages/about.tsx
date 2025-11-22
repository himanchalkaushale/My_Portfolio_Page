import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Himanchal Kaushale</h1>
        <div className={styles.subtitle}>BTech CSE Student | Aspiring Full-Stack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m Himanchal, a passionate Computer Science Engineering student currently in my 2nd year. 
              I&apos;m deeply fascinated by the world of technology and love building things that make a difference.
            </p>
            <p className={styles.paragraph}>
              My journey in programming started with curiosity about how websites and applications work, 
              and it has evolved into a genuine passion for creating digital solutions. I enjoy working 
              with modern web technologies and am always eager to learn new frameworks and tools.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Academic Journey</h2>
            <p className={styles.paragraph}>
              Currently pursuing <span className={styles.highlight}>BTech in Computer Science Engineering</span> 
              with a focus on software development, data structures, and algorithms. I&apos;m passionate about 
              applying theoretical knowledge to real-world problems through hands-on projects.
            </p>
            <p className={styles.paragraph}>
              My coursework includes subjects like Data Structures & Algorithms, Database Management Systems, 
              Computer Networks, and Software Engineering, which have provided me with a strong foundation 
              in computer science principles.
            </p>
          </section>


          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects & Learning</h2>
            <p className={styles.paragraph}>
              I actively work on personal projects to apply what I learn in my coursework. From building 
              responsive web applications to exploring machine learning concepts, I believe in learning 
              by doing and constantly challenging myself with new technologies.
            </p>
            <p className={styles.paragraph}>
              I&apos;m particularly interested in <span className={styles.highlight}>full-stack development</span> 
              and <span className={styles.highlight}>web technologies</span>. I enjoy the creative process of 
              designing user interfaces and the logical challenge of building robust backend systems.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Goals & Aspirations</h2>
            <p className={styles.paragraph}>
              My goal is to become a proficient full-stack developer and contribute to meaningful projects 
              that solve real-world problems. I&apos;m particularly interested in exploring areas like 
              cloud computing, DevOps, and emerging technologies like AI/ML.
            </p>
            <p className={styles.paragraph}>
              I&apos;m always open to collaboration, learning opportunities, and connecting with fellow 
              developers and tech enthusiasts. Feel free to reach out if you&apos;d like to discuss 
              technology, share ideas, or work on something together!
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Coding</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding or studying, I enjoy reading tech blogs, participating in coding 
              competitions, and exploring new programming languages. I also love problem-solving and 
              participating in hackathons to challenge myself and learn from the community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
